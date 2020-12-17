
exports.seed = function(knex) {
  return knex('sets').truncate()
    .then(function () {
      return knex('requests').insert([
        
      ]);
    });
};
