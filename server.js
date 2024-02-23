const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();

// console.log(process.env.host)
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6685036",
  password: "RSulg6gRF6",
  database: "sql6685036",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM library";
  db.query(sql, (err, rows) => {
    if (err) return res.json(err);
    return res.json(rows);
  });
});

// app.post("/add_books", (req, res) => {
//   const sql =
//     "INSERT INTO employee (`id`, `author`, `country`, `imageLink`, `language`, `link`,`pages`,`title`,`year`) VALUES (?,?,?,?,?,?,?,?,?)";
//   const values = [
//     req.body.id,
//     req.body.author,
//     req.body.country,
//     req.body.imageLink,
//     req.body.language,
//     req.body.link,
//     req.body.pages,
//     req.body.title,
//     req.body.year
//   ];
//   db.query(sql, values, (err, rows) => {
//     if (err) return res.json({ message: "Something occur error " + err });
//     return res.json({ success: "Inserted " + rows });
//   });
// });

app.listen(5000, () => {
  console.log("listening on port");
});
