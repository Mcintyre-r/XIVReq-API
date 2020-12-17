
exports.up = function(knex) {
    return knex.schema
    .createTable('sets',tbl=>{
        tbl.increments()
        tbl.text('Class')
            .notNullable()
        tbl.string('wpnID')
            .notNullable()
        tbl.string('shdID')
        tbl.string('headID')
            .notNullable()
        tbl.string('chestID')
            .notNullable()
        tbl.string('handsID')
            .notNullable()
        tbl.string('legsID')
            .notNullable()
        tbl.string('feetID')
            .notNullable()
        tbl.string('beltID')
            .notNullable()
        tbl.string('earID')
            .notNullable()
        tbl.string('neckID')
            .notNullable()
        tbl.string('wristID')
            .notNullable()
        tbl.string('ringID')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sets')
};
