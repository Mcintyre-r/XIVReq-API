const server = require('express').Router();
const user = require('./user-model.js')


server.get('/',  (req,res) => {
    const uuid = req.query.uuid
    user.getUser(uuid)
        .then( user => {
            res.status(200).json(user)
        })
        .catch(err => {
            console.log('error', err)
            res.status(400).json({ "error": err})
        })
})






module.exports = server;