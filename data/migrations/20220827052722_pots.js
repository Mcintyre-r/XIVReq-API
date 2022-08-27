
exports.up = function(knex) {
    return knex.schema
    .createTable('pots',tbl=>{
        tbl.increments()
        tbl.string('potID')
            .notNullable()
        tbl.string('potIcon')
            .notNullable()
        tbl.string('potName')
            .notNullable()
        tbl.string('quantity')
            .notNullable()
        tbl.text('requestedBy')
            .notNullable()
        tbl.string('requesterId')
            .notNullable()
        tbl.string('requesterDiscriminator')
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
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pots')
};
