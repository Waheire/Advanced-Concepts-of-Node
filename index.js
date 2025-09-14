const cluster = require("cluster");
console.log(cluster.isMaster, `Master ${process.pid} is running`);

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < 2; i++) {
    cluster.fork();
  }
} else {

  const express = require("express");
  const app = express();
  
  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }
  
  // Request handler
  app.get("/", (req, res) => {
    doWork(5000);
    res.send("Hello World");
  });
  
  app.listen(3000);
}
