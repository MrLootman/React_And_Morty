import database from "../datasource.js";

export const insertUser = async (firstname, lastname, email, password) => {
  return await database.query(
    "INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)",
    [firstname, lastname, email, password])
}

export const findByEmail = async (email) => {
  return await database.query(
    "SELECT * FROM user WHERE email = ?", [email]
  )
}