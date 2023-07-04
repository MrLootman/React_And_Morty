import express from "express";
import { uploadController } from "../controllers/uploadController.js";

const router = express.Router();

// Multer part:
import multer from "multer";
const upload = multer({ dest: './public/uploads/' });

router.post("/", upload.single('image'), uploadController);

export default router;