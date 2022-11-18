const express = require("express");
const router = require("./routes/main.routes");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
//Put your db url here
const DB_PATH = "mongodb://localhost:27017/questions";

mongoose.connect(DB_PATH);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);
app.use(express.static("public/"));

app.listen(port, () => {
  console.log("Hello world I'm listening on 127.0.0.1:" + port);
});
