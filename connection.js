//import module mysql
const mysql = require("mysql");

//buat koneksi dengan database di mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_siswa",
});

module.exports = db;
