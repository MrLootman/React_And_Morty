import express from "express";
import multer from "multer";
import uploadController from "../controllers/upload.controller.js";

const router = express.Router();
const upload = multer({ dest: "./public/tmp" })

router.post("/", upload.single("image"), uploadController)

export default router;