
exports.up = function(knex) {
    return knex.schema
    .createTable('sets',tbl=>{
        tbl.increments()
        tbl.text('Class')
            .notNullable()
        tbl.integer('wpnID')
            .notNullable()
        tbl.integer('headID')
            .notNullable()
        tbl.integer('chestID')
            .notNullable()
        tbl.integer('handsID')
            .notNullable()
        tbl.integer('legsID')
            .notNullable()
        tbl.integer('feetID')
            .notNullable()
        tbl.integer('beltID')
            .notNullable()
        tbl.integer('earID')
            .notNullable()
        tbl.integer('neckID')
            .notNullable()
        tbl.integer('wristID')
            .notNullable()
        tbl.integer('ringID')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sets')
};
