const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");

app.use(bodyParser.json());

const PORT = 3000;

//GET
app.get("/", (req, res) => {
  const query = "SELECT * FROM daftar_siswa";

  db.query(query, (error, result) => {
    //hasil dari query (error untuk menghandle error)
    response(200, result, "gets all data from data_mahasiswa", res);
  });
});
//mencoba pake params
app.get("/find", (req, res) => {
  console.log("find id:", req.query.id);

  const query = `SELECT nama FROM daftar_siswa WHERE id = ${req.query.id}`;

  db.query(query, (err, result) => {
    response(200, result, "find name mahasiswa", res);
  });
});

//POST
app.post("/login", (req, res) => {
  console.log(req.body);
  const password = req.body.password;

  if (password === 1234) {
    res.status(200).send("Anda berhasil login");
  } else {
    res.status(400).send("Password anda salah");
  }
});

//UPDATE
app.put("/username", (req, res) => {
  console.log({ updateData: req.body });
  res.send("Update berhasil");
});

//Running the server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} ...`);
});
