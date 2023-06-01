// Nécessite d'avoir ajouté "type": "module" dans le package.json
import dotenv from "dotenv";
import mysql from "mysql2/promise";

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
database.getConnection((error) => {
    // Vérification du type d'erreur en cas de problème de liaison:
    if (error) {
        console.error("Impossible to reach the database :", error);
        return;
    }

    console.log("👍 Success, the database has been reached!");
});

export default database;