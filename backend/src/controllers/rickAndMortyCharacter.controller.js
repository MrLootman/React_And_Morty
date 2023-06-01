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

const createCharacter = (req, res) => {
    const { name, status, gender, species, image } = req.body;

    database.query("SELECT * FROM rick_and_morty_character WHERE name = ?", [name])
        .then(([result]) => {
            if (result.length > 0) {
                res.status(409).json({
                    success: false,
                    message: `Character named ${name} already exist in the database`
                })
            } else {
                database.query("INSERT INTO rick_and_morty_character (name, status, gender, species, image) VALUES (?, ?, ?, ?, ?)",
                    [name, status, gender, species, image])
                    .then(([result]) => {
                        if (result.affectedRows) {
                            res.status(201).json({
                                success: true,
                                message: `The character named ${name} has been created successfully`
                            })
                        }
                    })
                    .catch((err) => {
                        console.error("An error occured while retrieving characters", err);
                    })
            }
        })
}

const updateCharacter = (req, res) => {
    const { name, status, gender, species, image } = req.body;
    const id = req.params.id;

    database.query("UPDATE rick_and_morty_character SET name = ?, status = ?, gender = ?, species = ?, image = ? WHERE id = ?",
        [name, status, gender, species, image, id])
        .then(([result]) => {
            if (result.affectedRows) {
                res.status(200).send({
                    success: true,
                    message: `Character with the id ${id} has been updated`
                })
            } else {
                res.status(204).send({
                    success: false,
                    message: `Character with the id ${id} probably doesn't exist`
                })
            }
        })
        .catch((err) => {
            console.error("An error occured while updating this character", err);
        })
}

// const updateCharacter = (req, res) => {
//     const { name, status, gender, species, image } = req.body;
//     const id = req.params.id;

//     // Construire les clauses SET dynamiquement en fonction des champs fournis
//     const setClauses = [];
//     const values = [];

//     if (name) {
//         setClauses.push("name = ?");
//         values.push(name);
//     }

//     if (status) {
//         setClauses.push("status = ?");
//         values.push(status);
//     }

//     if (gender) {
//         setClauses.push("gender = ?");
//         values.push(gender);
//     }

//     if (species) {
//         setClauses.push("species = ?");
//         values.push(species);
//     }

//     if (image) {
//         setClauses.push("image = ?");
//         values.push(image);
//     }

//     if (setClauses.length === 0) {
//         // Aucun champ à mettre à jour spécifié
//         return res.status(400).send({
//             success: false,
//             message: "No fields provided for update"
//         });
//     }

//     // Construire la requête de mise à jour dynamiquement
//     const updateQuery = `UPDATE rick_and_morty_character SET ${setClauses.join(", ")} WHERE id = ?`;
//     values.push(id);

//     database.query(updateQuery, values)
//         .then(([result]) => {
//             if (result.affectedRows) {
//                 res.status(200).send({
//                     success: true,
//                     message: `Character with the id ${id} has been updated, where the clauses are: ${setClauses}`
//                 });
//             } else {
//                 res.status(404).send({
//                     success: false,
//                     message: `Character with the id ${id} not found`
//                 });
//             }
//         })
//         .catch((err) => {
//             console.error("An error occurred while updating this character", err);
//             res.status(500).send({
//                 success: false,
//                 message: "An error occurred while updating this character"
//             });
//         });
// };

const deleteCharacter = (req, res) => {
    const id = req.params.id;

    database.query("DELETE FROM rick_and_morty_character WHERE id = ?", [id])
        .then(([result]) => {
            if (result.affectedRows > 0) {
                res.status(200).send(`Character with id ${id} has been successfully deleted`)
            } else {
                res.status(404).send(`Character with id ${id} probably doesn't exist`)
            }
        })
        .catch((err) => {
            console.error("An error occured while deleting this character", err);
            res.status(500).send("Internal Server Error")
        })
}

export { getAllCharacters, getCharacterById, createCharacter, updateCharacter, deleteCharacter };