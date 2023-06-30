import database from "../datasource.js";

// Gestionnaire de récupération des personnages :
const getAllCharacters = (req, res) => {
    // On tente d'interroger la base de donnée pour récupérer tous les personnages
    database.query("SELECT * FROM rick_and_morty_character")
        .then(([result]) => {
            if (result.length) {
                // Envoi de la réponse si result est truthy.
                res.status(200).send(result)
            } else {
                // Gestion du cas où aucun résultat n'a été trouvé
                res.status(404).json({ error: "No characters found" });
            }
        })
        .catch((err) => {
            console.error("An error occured while retrieving characters", err);
        })
}

const getCharacterById = (req, res) => {
    const id = req.params.id;

    database.query("SELECT * FROM rick_and_morty_character WHERE id = ?", [id])
        .then(([result]) => {
            if (result.length) {
                res.status(200).send(result)
            } else {
                res.status(404).json({ error: `The character with the id ${req.params.id} doesn't exists` })
            }
        })
        .catch((err) => {
            console.error("An error occured while retrieving characters", err);
        })
}

export { getAllCharacters, getCharacterById };