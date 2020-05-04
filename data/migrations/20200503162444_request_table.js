
exports.up = function(knex) {
  return knex.schema
    .createTable('requests', tbl => {
        tbl.increments()
        tbl.text('item')
            .notNullable()
        tbl.text('itemIcon')
            .notNullable()
        tbl.integer('itemID')
            .notNullable()
        tbl.integer('quantity')
            .notNullable()
        tbl.text('requestedBy')
            .notNullable()
        tbl.string('requesterId')
            .notNullable()
        tbl.boolean('completed')
            .defaultTo(false)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('requests')
};
