exports.up = function(knex) {
  return knex.schema.createTable("Users", tbl => {
    tbl.increments();
    tbl
      .string("username")
      .notNullable()
      .unique()
      .index();
    tbl.string("password").notNullable();
    tbl
      .enu("type", ["user", "admin", "customer"])
      .notNullable()
      .index()
      .defaultTo("user");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Users");
};
