exports.up = function(knex) {
  return knex.schema.createTable("Items", tbl => {
    tbl.increments();
    tbl
      .string("item-name")
      .notNullable()
      .unique()
      .index();
    tbl.string("item-description");
    tbl
      .string("item-location")
      .notNullable()
      .index()
      .defaultTo("staged");
    tbl
      .float("price")
      .notNullable()
      .index()
      .defaultTo(0.01);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Items");
};
