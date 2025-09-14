process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
const crypto = require("crypto");

// Is the file being executed in master mode?
if (cluster.isMaster) {
  // Cause index.js to be exceuted *again* but in child mode..
  cluster.fork();
} else {
  // Im a child, I'm going to act like a server and do nothing else
  const express = require("express");
  const app = express();

  // function doWork(duration) {
  //   const start = Date.now();
  //   while (Date.now() - start < duration) {}
  // }

  // Request handler
  app.get("/", (req, res) => {
    // doWork(5000);
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hello World");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("This was fast!");
  });

  app.listen(3000);
}
