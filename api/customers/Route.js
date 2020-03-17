const route = require("express").Router();
const custDb = require("../customers/Model");

route.get("/", (req, res) => {
  res.status(201).json({ Message: "Hello" });
});

module.exports = route;
