const db = require('../../../data/dbConfig')

module.exports = {
    getSet
}


function getSet(setName){
    return db('sets')
        .where('Class', setName)
        .first()
}