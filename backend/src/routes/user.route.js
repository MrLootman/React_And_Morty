import express from "express";
import { createUser, isEmailExists } from "../controllers/user.controller.js";
import { hashPassword, isEmailAlreadyExists, isPasswordValid, verifyToken } from "../services/auth.js";
const router = express.Router();

// User Routes:
router.post("/", isEmailExists, hashPassword, createUser);
router.post("/login", isEmailAlreadyExists, isPasswordValid);
router.post("/validateToken", verifyToken, (req, res) => {
  if (req.payload) {
    res.json({
      valid: true,
      user: req.payload
    });
  } else {
    res.json({
      valid: false,
      user: null
    })
  }
});

export default router;