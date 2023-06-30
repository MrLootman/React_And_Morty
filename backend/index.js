// Nécessite d'avoir ajouté "type": "module" dans le package.json
import express from "express"
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.BACKEND_PORT;

import router from "./src/routes/rickAndMortyCharacter.route.js";

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bonjour les amis !")
});

app.use("/characters", router);

app.listen(port, () => {
    console.log(`Server is actually running on port ${port}`)
});