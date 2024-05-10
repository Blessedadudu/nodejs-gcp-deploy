const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!" + " - " + process.env.MESSAGE);
});

app.get("/ping", (req, res) => {
  res.send({ success: true });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening on port 3000");
});
