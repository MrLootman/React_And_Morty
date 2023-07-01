import express from "express";
const router = express.Router();

import { getAllCharacters, getCharacterById, createCharacter } from "../controllers/rickAndMortyCharacter.controller.js";

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);
router.post("/", createCharacter);

export default router;