const route = require("express").Router();
const userDb = require("../users/Modle");

route.get("/", (req, res) => {
  userDb
    .getAll()
    .then(ele => {
      res.status(201).json(ele);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = route;
