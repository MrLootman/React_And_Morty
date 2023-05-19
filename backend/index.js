const express = require("express");
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Bonjour les amis !")
})

app.listen(port, () => {
    console.log(`Server is actually running on port ${port}`)
})