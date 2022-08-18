
exports.up = function(knex) {
    return knex.schema
    .createTable('requests',tbl=>{
        tbl.increments()
        tbl.text('Class')
        tbl.string('MainHandID')
        tbl.string('MainHandIcon')
        tbl.string('MainHandName')
        tbl.string('OffHandID')
        tbl.string('OffHandIcon')
        tbl.string('OffHandName')
        tbl.string('HeadID')
        tbl.string('HeadIcon')
        tbl.string('HeadName')
        tbl.string('BodyID')
        tbl.string('BodyIcon')
        tbl.string('BodyName')
        tbl.string('GlovesID')
        tbl.string('GlovesIcon')
        tbl.string('GlovesName')
        tbl.string('LegsID')
        tbl.string('LegsIcon')
        tbl.string('LegsName')
        tbl.string('FeetID')
        tbl.string('FeetIcon')
        tbl.string('FeetName')
        tbl.string('EarsID')
        tbl.string('EarsIcon')
        tbl.string('EarsName')
        tbl.string('NeckID')
        tbl.string('NeckIcon')
        tbl.string('NeckName')
        tbl.string('WristsID')
        tbl.string('WristsIcon')
        tbl.string('WristsName')
        tbl.string('FingerLID')
        tbl.string('FingerLIcon')
        tbl.string('FingerLName')
        tbl.string('FingerRID')
        tbl.string('FingerRIcon')
        tbl.string('FingerRName')
        tbl.text('requestedBy')
            .notNullable()
        tbl.string('requesterId')
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
    return knex.schema.dropTableIfExists('requests')
};
