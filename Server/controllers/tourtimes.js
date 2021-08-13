const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllTours = (req, res) => {
  pool.query("SELECT * FROM tourtimes", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getTourById = (req, res) => {
  let sql = "SELECT * FROM tourtimes WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

// const createUser = (req, res) => {
//   const { firstName, lastName } = req.body
//   let sql = "INSERT INTO  (first_name, last_name) VALUES (?, ?)"
//   sql = mysql.format(sql, [ firstName, lastName ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ newId: results.insertId });
//   })
// }

// const updateUserById = (req, res) => {
//   const { firstName, lastName } = req.body
//   let sql = "UPDATE login_app_users SET first_name = ?, last_name = ? WHERE id = ?"
//   sql = mysql.format(sql, [ firstName, lastName, req.params.id ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.status(204).json();
//   })
// }

// const deleteUserByFirstName = (req, res) => {
//   let sql = "DELETE FROM users WHERE username = ?"
//   sql = mysql.format(sql, [ req.params.username ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//   })
// }

module.exports = {
    getAllTours,
    getTourById,
  // createUser,
  // updateUserById,
  //deleteUserByFirstName
}