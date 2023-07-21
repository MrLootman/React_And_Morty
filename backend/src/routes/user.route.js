import express from "express";
import { createUser, isEmailExists } from "../controllers/user.controller.js";
import { hashPassword, isEmailAlreadyExists, isPasswordValid } from "../services/auth.js";

const router = express.Router();

// User Routes:
router.post("/", isEmailExists, hashPassword, createUser);
router.post("/login", isEmailAlreadyExists, isPasswordValid)

export default router;