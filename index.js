const crypto = require("crypto");

const express = require("express");
const app = express();

// Request handler
app.get("/", (req, res) => {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    res.send("Hello World");
  });
});

app.get("/fast", (req, res) => {
  res.send("This was fast!");
});

app.listen(3000);
