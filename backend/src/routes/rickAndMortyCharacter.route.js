import express from "express";
const router = express.Router();

import { getAllCharacters, getCharacterById } from "../controllers/rickAndMortyCharacter.controller.js";

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);

export default router;