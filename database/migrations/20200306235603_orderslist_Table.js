exports.up = function(knex) {
  return knex.schema.createTable("Orderlists", tbl => {
    tbl.increments();
    tbl
      .integer("customer_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("Customers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .index();
    tbl
      .integer("order_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("Orders")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .index();
    tbl
      .boolean("finished")
      .notNullable()
      .index()
      .defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schmea.dropTableIfExists("Orderlists");
};
