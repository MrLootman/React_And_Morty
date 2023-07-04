import express from "express";
import { getAllCharacters, getCharacterById, createCharacter } from "../controllers/rickAndMortyCharacter.controller.js";

const router = express.Router();

// Rick and Morty Characters Routes:
router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);
router.post("/", createCharacter);

export default router;