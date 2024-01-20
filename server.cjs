const express = require("express");
const app = express();
require("dotenv").config();

let code = "";
app.get("/", (req, res) => {
  res.send("Hello from express server.");
});
app.post("/callback", (req, res) => {
  code = req.query;
  console.log(req.query);
});

app.get("/getcode", (req, res) => {
  res.send(code);
});

app.listen(process.env.PORT, () => {
  console.log("server is runing at port " + process.env.PORT);
});

module.exports = app;
