const express = require('express');
const server = express.Router();
const request = require('./request-model.js')


server.get('/', (req,res) => {
    request.getRequests()
        .then( requests => {
            console.log(requests)
            res.status(200).json({ "Requests": requests})
        })
})



server.get('/specific', (req,res) => {
    request.getRequestsById('59423394055069696')
        .then( requests => {
            console.log(requests)
            res.status(200).json({ "Requests": requests})
        })
})



module.exports = server;