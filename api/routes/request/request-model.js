const db = require('../../../data/dbConfig')

module.exports = {
    getRequests,
    submitRequest,
    deleteRequest,
    updateRequest,
    getSpecificRequests
}

function getRequests(query){
    return db('requests')
        .modify(function (qb) {
        if (query) {
          qb.where('requesterId', query);
        }})
}

function getSpecificRequests(query){
    return db('requests')
        .modify(function (qb) {
        if (query) {
          qb.where('id', query);
        }})
}

function submitRequest(request){
    console.log(request)
    return db('requests')
        .insert(request)
}

function deleteRequest(id){
    return db('requests')
        .where('id', id)
        .delete()
}

function updateRequest(update, id){
    return db('requests')
        .where('id', id)
        .update(update)
}