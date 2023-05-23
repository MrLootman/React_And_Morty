// Nécessite d'avoir ajouté "type": "module" dans le package.json
import express from "express"
const app = express()
const port = 3000

import router from "./src/routes/rickAndMortyCharacter.route.js";

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bonjour les amis !")
})

app.use("/characters", router);

app.listen(port, () => {
    console.log(`Server is actually running on port ${port}`)
})