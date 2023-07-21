import { insertUser, findByEmail } from "../models/user.model.js";

const createUser = (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  insertUser(firstname, lastname, email, password)
      .then(([result]) => {
          if (result.affectedRows) {

              return res.status(201).send(`The user with the email: ${email}, has been created successfully`)
          }
          return res.status(404).send("An error occured while creating this user")
      })
      .catch((err) => {
          console.error("Internal Server Error", err.message);
      })
}

const isEmailExists = (req, res, next) => {
    const { email } = req.body;

    findByEmail(email)
        .then(([response]) => {
            if (response.length) {
                res.status(403).send("This email already exist in the database")
            } else {
                next()
            }
        })
        .catch((err) => {
            console.error("Internal Server Error", err.message);
        })
}

export { createUser, isEmailExists }