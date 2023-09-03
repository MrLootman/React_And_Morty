import { findAll, findById, insertCharacter } from "../models/rickAndMortyCharacter.model.js";

// Gestionnaire de récupération des personnages :
const getAllCharacters = (req, res) => {
    // On tente d'interroger la base de donnée pour récupérer tous les personnages
    findAll()
        .then(([result]) => {
            if (result.length) {
                // Envoi de la réponse si result est truthy.
                return res.status(200).send(result)
            } else {
                // Gestion du cas où aucun résultat n'a été trouvé
                return res.status(404).json({ error: "No characters found" });
            }
        })
        .catch((err) => {
            console.error("An error occured while retrieving characters", err);
        })
}

const getCharacterById = (req, res) => {
    const id = req.params.id;

    findById(id)
        .then(([result]) => {
            if (result.length) {
                return res.status(200).send(result)
            } else {
                return res.status(404).json({ error: `The character with the id ${req.params.id} doesn't exists` })
            }
        })
        .catch((err) => {
            console.error("An error occured while retrieving characters", err);
        })
}

const createCharacter = (req, res) => {
    const { name, status, gender, species, image } = req.body;

    insertCharacter(name, status, gender, species, image)
        .then(([result]) => {
            if (result.affectedRows) {
                return res.status(201).send(`${name} has been created successfully`)
            }
            return res.status(404).send("An error occured while creating this character")
        })
        .catch((err) => {
            console.error("Internal Server Error", err.message);
        })
}

export { getAllCharacters, getCharacterById, createCharacter };