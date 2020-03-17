db = require("../../database/dbConfig");
const tbl = "Users";

module.exports = {
  getAll,
  add,
  del,
  getbyid
};

function getAll() {
  return db(tbl);
}

function add(user) {}
function del(id) {}
function getbyid(id) {}
