
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
        tbl.string('requesterPicture')
            .notNullable()
        tbl.boolean('claimed')
            .defaultTo(false)
        tbl.string('worker')
        tbl.string('workerID')
        tbl.string('workerPicture')
        tbl.boolean('completed')
            .defaultTo(false)
        tbl.boolean('set')
            .defaultTo(false)
        tbl.text('setClass')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('requests')
};
