const express = require("express");
const cors = require("cors");
const server = express();

const custRoute = require("../api/customers/Route");
const userRoute = require("../api/users/Route");

server.use(express.json());
server.use(cors());
server.use("/api/cust", custRoute);
server.use("/api/users", userRoute);

server.get("/", (req, res) => {
  res.send({ Jarvis: "Ready to work sir." });
});

module.exports = server;
