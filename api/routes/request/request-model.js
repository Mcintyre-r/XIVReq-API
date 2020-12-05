const db = require('../../../data/dbConfig')

module.exports = {
    getRequests,
    submitRequest
}


function getRequests(query){
    return db('requests')
        .modify(function (qb) {
        if (query) {
          qb.where('requesterId', query);
        }})
}


function submitRequest(request){
    return db('requests')
        .insert(request)
}