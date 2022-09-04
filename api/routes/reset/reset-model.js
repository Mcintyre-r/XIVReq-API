const db = require('../../../data/dbConfig')

module.exports = {
    getResets,
    submitReset,
    deleteReset

}

function getResets(query){
    return db('reset')
        .modify(function (qb) {
        if (query) {
          qb.where('requesterId', query);
        }})
}

function submitReset(reset){
    return db('reset')
        .insert(reset)
}

function deleteReset(){
    return db('reset')
        .delete()
}
