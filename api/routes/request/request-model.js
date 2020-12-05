const db = require('../../../data/dbConfig')

module.exports = {
    getRequests,
    getRequestsById
}


function getRequests(query){
    return db('requests')
        .modify(function (qb) {
        if (query) {
          qb.where('requesterId', query);
        }})
}


function getRequestsById(reqId){
    return db('requests')
        .where("requesterId", reqId)
}