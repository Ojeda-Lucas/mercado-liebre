
// primeras lineas fijas
const express = require("express");
const server = express();
const port = process.env.PORT || 2020;
const start = () => console.log("Starting server");
server.listen(port, start);
// modulo de path
const path = require("path");
// configuracion del public
const public = path.join(__dirname, "../public");
// metodo statics
const statics = express.static(public);
console.log(public);

server.use(statics);
// rutas
server.get("/", function (req, res) {
  file = path.join(__dirname, "views", "home.html");
  res.sendFile(file);
});

server.get("/register", function (req, res) {
  file = path.join(__dirname, "views", "register.html");
  res.sendFile(file);
});

server.get("/login", function (req, res) {
  file = path.join(__dirname, "views", "login.html");
  res.sendFile(file);
});

server.post("/", function (req, res) {
  file = path.join(__dirname, "views", "home.html");
  res.sendFile(file);
});