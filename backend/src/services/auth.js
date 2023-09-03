import argon2 from "argon2";
import { findByEmail } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const hashPassword = async (req, res, next) => {
  try {
    const hash = await argon2.hash(req.body.password, {
      type: argon2.argon2id,
      memoryCost: 19456,
      parallelism: 1,
      hashLength: 50,
    });

    req.body.password = hash;

    next();
  } catch (err) {
    console.error("Impossible to hash the password", err);
  }
}

export const isEmailAlreadyExists = (req, res, next) => {
  const { email } = req.body;

  findByEmail(email)
    .then(([response]) => {
      if (response.length) {
        res.user = response[0]

        next()
      } else {
        res.status(403).json({
          success: false,
          message: `An error occured with the email: ${email}`
        })
      }
    })
    .catch((err) => {
      console.error("Internal Server Error", err.message);
    })
}

export const isPasswordValid = (req, res) => {
  argon2.verify(res.user.password, req.body.password)
    .then((match) => {
      if (match) {
        let token;

        delete res.user.password;
        // Un token se divise en trois partie : Les header, le payload, la signature
        if (req.body.remember) {
          token = jwt.sign(res.user, process.env.JWT_SECRET, { expiresIn: "1h" });
        } else {
          token = jwt.sign(res.user, process.env.JWT_SECRET, { expiresIn: 1 });
        }

        res.status(201).send({
          token,
          data: res.user
        })
      } else {
        res.status(403).send("An error occured while creating the token")
      }
    })
    .catch((err) => {
      console.error("Internal Server Error", err.message);
    })
}

export const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).send({ message: "Token has expired" })
    }
    console.error(err);
  }
}