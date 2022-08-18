
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {uuid:'59423394055069696',username:'Exa',avatar:'2c9f30fccd6e9160891e4f3ba958a42e',discriminator:'0469',crafter:true}
      ]);
    });
};
