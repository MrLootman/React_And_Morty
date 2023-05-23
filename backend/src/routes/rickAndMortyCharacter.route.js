import express from "express";
const router = express.Router();

import { getAllCharacters, getCharacterById, createCharacter, updateCharacter, deleteCharacter } from "../controllers/rickAndMortyCharacter.controller.js";

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);
router.put("/:id", updateCharacter);
router.post("/", createCharacter);
router.delete("/:id", deleteCharacter);

export default router;