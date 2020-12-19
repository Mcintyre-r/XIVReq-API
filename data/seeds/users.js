
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, uuid: '211556765492314112', username: 'Phii Delity', avatar: 'c28f443fd3405de1786b1296c2d397f7', discriminator: '9640', crafter: true},
        {id: 2, uuid: '200828059845263361', username: 'Anxielexitism', avatar: 'dc2fd7d9f1428d97313e42071d82baa4', discriminator: '3100', crafter: false},
        {id: 3, uuid: '138858311410909184', username: 'Johnnydevo', avatar: 'f09126c4e15cd0a9969f055044432dc2', discriminator: '5188', crafter: true},
        {id: 4, uuid: '110836062804295680', username: 'DoomWaffle', avatar: 'cf3d9909c0df8a5d436a76d36421cc4e', discriminator: '6274', crafter: true},
        {id: 5, uuid: '127252085010989056', username: 'Instability', avatar: 'aa820be5c645d73ea3c867339d0bc5b1', discriminator: '6031', crafter: true},
        {id: 6, uuid: '221558877307666433', username: 'Ophelia', avatar: '17ee510190f48f46833f0b40736972e0', discriminator: '3125', crafter: true},

      ]);
    });
};
