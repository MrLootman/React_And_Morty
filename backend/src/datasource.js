// Nécessite d'avoir ajouté "type": "module" dans le package.json
import dotenv from "dotenv";
import mysql from "mysql2/promise";

// Donne accès aux variables d'environnements inscrites dans le fichier .env
dotenv.config();

const database = mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
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