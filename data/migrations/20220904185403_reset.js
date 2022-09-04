
exports.up = function(knex) {
    return knex.schema
      .createTable('reset',tbl=>{
          tbl.increments()
          tbl.string('uuid')
              .notNullable()
              .unique()
      })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('reset')
  };
  