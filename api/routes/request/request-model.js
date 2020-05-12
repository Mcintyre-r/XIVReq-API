const db = require('../../../data/dbConfig')

module.exports = {
    getRequests,
    getRequestsById
}


function getRequests(){
    return db('requests')
}


function getRequestsById(reqId){
    return db('requests')
        .where("requesterId", reqId)
}