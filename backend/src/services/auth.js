import argon2 from "argon2";
import { findByEmail } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const hashPassword = async (req, res, next) => {
  try {
    const hash = await argon2.hash(req.body.password, {
      type: argon2.argon2d,
      memoryCost: 2 ** 16,
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
            res.status(403).send("This email already exist in the database")
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
        delete res.user.password;
        // Un token se divise en trois partie : Les header, le payload, la signature
        const token = jwt.sign(res.user, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(201).send({ 
          ...res.user, token
        })
      } else {
        res.status(403).send("An error occured while creating the token")
      }
    })
    .catch((err) => {
      console.error("Internal Server Error", err.message);
    })
}