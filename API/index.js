const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to de db");
  })
  .catch((error) => {
    console.log("Error connection to db", error);
  });

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
