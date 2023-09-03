// Nécessite d'avoir ajouté "type": "module" dans le package.json
import express from "express"
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.BACKEND_PORT;

// Import des différents routers:
import rickCharacterRouter from "./src/routes/rickAndMortyCharacter.route.js";
import uploadRouter from "./src/routes/upload.router.js";
import userRouter from "./src/routes/user.route.js";

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    optionSuccessStatus: 200,
    credentials: true
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static("./public"));

app.use("/users", userRouter);
app.use("/characters", rickCharacterRouter);
app.use("/upload", uploadRouter);

app.listen(port, () => {
    console.log(`Server is actually running on port ${port}`)
});

export default app;