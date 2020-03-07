exports.up = function(knex) {
  return knex.schema.createTable("Orders", tbl => {
    tbl.increments();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .index();
    tbl
      .integer("item_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Items")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Orders");
};
