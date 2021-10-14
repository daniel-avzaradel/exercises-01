const express = require("express");
const connectDB = require("../server/database/connection");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config({ path: "config.env" });

connectDB();

const app = express();

app.get("/", (req, res) => {});

app.listen(3030, () => {
  console.log("listening to port 3030");
});
