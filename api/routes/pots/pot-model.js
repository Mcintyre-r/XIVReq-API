const db = require('../../../data/dbConfig')

module.exports = {
    getRequests,
    submitRequest,
    deleteRequest,
    updateRequest,
    getSpecificRequests
}

function getRequests(query){
    return db('pots')
        .modify(function (qb) {
        if (query) {
          qb.where('requesterId', query);
        }})
}

function getSpecificRequests(query){
    return db('pots')
        .modify(function (qb) {
        if (query) {
          qb.where('id', query);
        }})
}

function submitRequest(request){
    console.log(request)
    return db('pots')
        .insert(request)
}

function deleteRequest(id){
    return db('pots')
        .where('id', id)
        .delete()
}

function updateRequest(update, id){
    return db('pots')
        .where('id', id)
        .update(update)
}