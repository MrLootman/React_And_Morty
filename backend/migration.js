// Nécessite d'avoir ajouté "type": "module" dans le package.json
import dotenv from "dotenv";
import mysql from "mysql2";

// La dépendance fs (File System) est implicitement installée avec Express.js
import fs from "fs";

// Donne accès aux variables d'environnements inscrites dans le fichier .env
dotenv.config();

const database = mysql.createPool({
    host: process.env.HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
});

// Tentative de liaison avec la base de donnée:
database.getConnection((error, connection) => {
    // Vérification du type d'erreur en cas de problème de liaison:
    if (error) {
        console.error("Impossible to reach the database :", error);
        return;
    }

    console.log("👍 Success, the database has been reached!");

    // Retourne le contenu du chemin spécifié, et encodage du fichier database.sql en chaîne de caractère:
    const sql = fs.readFileSync('./database.sql', 'utf-8');

    connection.query(sql, (error) => {
        if (error) {
            console.error("Impossible to add data to the database");
            return;
        };

        console.log("👍 Success, the data has been added to the database!");

        connection.release(); // Libérer la connexion une fois terminée
    });
});