const express = require("express");
const mysql = require("mysql");
// const bcrypt = require("bcrypt");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define  database name
const dbName = "notes";

// const saltRounds = 10;

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: dbName,
});

db.connect((err) => {
  if (err) {
    console.log(
      "Unable to connect to the specified database. Creating the database instead."
    );
    db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
    });

    db.connect((err) => {
      if (err) console.log(err);
      console.log("Connected to the default database.");

      db.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (err, result) => {
        if (err) console.log(err);
        console.log(`Database ${dbName} created`);
      });
    });
  } else {
    console.log(`Connected to the ${dbName} database.`);
  }

  let sql =
    "CREATE TABLE IF NOT EXISTS notes(id int AUTO_INCREMENT, note TEXT, date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    console.log("Notes table created");
  });
});

// Insert note
app.post("/addnote", (req, res) => {
  let note = { note: req.body.note };
  let sql = "INSERT INTO notes SET ?";
  let query = db.query(sql, note, (err, result) => {
    if (err) console.log(err);
    res.send(`Note added with ID: ${result.insertId}`);
  });
});

// Get note
app.get("/getnote/:id", (req, res) => {
  let sql = `SELECT * FROM notes WHERE id=${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.send(`Note ${req.params.id} fetched`);
  });
});

// Delete note
app.delete("/deletenote/:id", (req, res) => {
  let sql = `DELETE FROM notes WHERE id=${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.send(`Note ${req.params.id} deleted`);
  });
});

// Get all notes
app.get("/getallnotes", (req, res) => {
  let sql = "SELECT * FROM notes";
  let query = db.query(sql, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    res.send(results);
  });
});

// Checking if server is still open
app.listen(4000, () => {
  console.log("Server is successful on port 4000");
});
