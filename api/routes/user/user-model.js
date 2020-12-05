const db = require('../../../data/dbConfig')


module.exports = {
    getUser,
    addUser,
    updateUser,
}

function getUser( uuid){
    return db('user')
        .where('uuid', uuid)
        .first()
}

function addUser(user){
    return db('user')
        .insert(user, 'uuid')
}

function updateUser(user){
    return db('user')
        .where('uuid', user.uuid)
        .update(user, 'uuid')
}