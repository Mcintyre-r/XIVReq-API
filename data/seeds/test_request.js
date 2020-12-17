exports.seed = function(knex) {
    return knex('requests').truncate()
      .then(function () {
        return knex('requests').insert([
            {item: 'DRK Set',itemIcon:'https://kurca.space/gallery/ffxivjobicons/images/SVG/DRK.png.svg', itemID: 0000, quantity: 1, requestedBy: 'me', requesterId: '8i124109274012', requesterPicture: '19274127095710925t7u', set: true, setClass: 'drk'},
        ]);
    });
};