
exports.up = function(knex) {
  return knex.schema
    .createTable('user',tbl=>{
        tbl.increments()
        tbl.string('uuid')
            .notNullable()
            .unique()
        tbl.string('username')
            .notNullable()
        tbl.string('avatar')
            .notNullable()
        tbl.string('discriminator')
            .notNullable()
        tbl.boolean('crafter')
            .defaultTo(false)
    })
};

exports.down = function(knex) {
  
};
