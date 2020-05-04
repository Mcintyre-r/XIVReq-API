
exports.seed = function(knex) {
  return knex('requests').truncate()
    .then(function () {
      return knex('requests').insert([
        {item: "Grade 3 Tincture of Dexterity", itemIcon: "https://xivapi.com/i/020000/020709.png", itemID: 29493, quantity: 10, requestedBy: "Exa", requesterId: '59423394055069696', completed: false},
        {item: "Grade 3 Tincture of Mind", itemIcon: "https://xivapi.com/i/020000/020708.png", itemID: 29496, quantity: 50, requestedBy: "Phii Delity", requesterId: '211556765492314112', completed: false},
        {item: "Neo-Ishgardian Sword", itemIcon: "https://xivapi.com/i/030000/030619.png", itemID: 29404, quantity: 1, requestedBy: "Exa", requesterId: '59423394055069696', completed: false},
        {item: "Grade 3 Tincture of Mind", itemIcon: "https://xivapi.com/i/020000/020708.png", itemID: 29496, quantity: 200, requestedBy: "Exa", requesterId: '59423394055069696', completed: true},
        {item: "Crawler Cocoon", itemIcon: "https://xivapi.com/i/021000/021661.png", itemID: 12600, quantity: 10, requestedBy: "Phii Delity", requesterId: '211556765492314112', completed: false}
      ]);
    });
};
