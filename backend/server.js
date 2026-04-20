require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

app.post("/join", (req, res) => {
  const { name, phone, plan } = req.body;

  const sql = "INSERT INTO members (name, phone, plan) VALUES (?, ?, ?)";

  db.query(sql, [name, phone, plan], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    res.json({ message: "Successfully joined Bright Gym 💪" });
  });
});
app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  const sql =
    "INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.log("DB Insert Error:", err);
      return res.status(500).send("Error saving message");
    }

    res.send("Message sent successfully");
  });
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});