exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Customers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Customers").insert([
        { name: "Customer1", address: "101new street", paymentType: "cash" },
        { name: "Customer2", address: "202new street", paymentType: "cod" }
      ]);
    });
};
