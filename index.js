const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  const fileName = path.join(__dirname, "index.html");
  res.sendFile(fileName);
});

app.get("/about", (req, res) => {
  const fileName = path.join(__dirname, "about.html");
  res.sendFile(fileName);
});

app.get("/contact-me", (req, res) => {
  const fileName = path.join(__dirname, "contact-me.html");
  res.sendFile(fileName);
});

app.use((req, res) => {
  const fileName = path.join(__dirname, "404.html");
  res.sendFile(fileName);
});

app.listen(port, () => {});
