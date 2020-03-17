const crypt = require("bcryptjs");
const hash = crypt.hashSync("hello", 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Users").insert([
        { username: "Ark", password: hash, type: "admin" },
        { username: "Jake", password: hash, type: "user" },
        { username: "Fin", password: hash, type: "customer" }
      ]);
    });
};
