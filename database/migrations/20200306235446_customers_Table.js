exports.up = function(knex) {
  return knex.schema.createTable("Customers", tbl => {
    tbl.increments();
    tbl
      .string("name")
      .notNullable()
      .unique()
      .index();
    tbl
      .string("address")
      .notNullable()
      .index();
    tbl
      .enu("paymentType", ["cash", "credit", "cod"])
      .notNullable()
      .index()
      .defaultTo("cash");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Customers");
};
