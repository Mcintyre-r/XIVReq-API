const server = require('express').Router();
const request = require('./request-model.js')


server.get('/',  (req,res) => {
    request.getRequests(req.query.id)
        .then( requests => {
            res.status(200).json({ "Requests": requests})
        })
        .catch(err => {
            res.status(400).json({ "error": err})
        })
})



server.get('/specific', (req,res) => {
    request.getRequestsById('59423394055069696')
        .then( requests => {
            res.status(200).json({ "Requests": requests})
        })
})



module.exports = server;