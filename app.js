require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("views", { publicPath: "/home/" }));

app.listen(4000, () => {
  console.log("Servidor iniciado en el puerto 4000");
});




app.use(express.json());



app.use("/", express.static(path.resolve("views", "home")))

app.use("/css", express.static(path.resolve("views", "css")))

app.use(express.static(path.resolve("views")));

module.exports = app;
