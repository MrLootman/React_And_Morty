import database from "../datasource.js";

export const findAll = async () => {
  return await database.query("SELECT * FROM rick_and_morty_character");
};

export const findById = async (id) => {
  return await database.query("SELECT * FROM rick_and_morty_character WHERE id = ?", [id])
};

export const insertCharacter = async (name, status, gender, species, image) => {
  return await database.query(
    "INSERT INTO rick_and_morty_character (name, status, gender, species, image) VALUES (?, ?, ?, ?, ?)",
    [name, status, gender, species, image])
}