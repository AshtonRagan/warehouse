const express = require("express");
const server = express();

server.use(express.json);

server.get("/", (req, res) => {
  res.send({ Jarvis: "Ready to work sir." });
});

module.exports = server;
