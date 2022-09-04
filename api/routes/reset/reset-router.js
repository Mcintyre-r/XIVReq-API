const server = require('express').Router();
const request = require('../request/request-model.js');
const userDB = require('../user/user-model');
const resetDB = require('./reset-model')
const webhook = require('webhook-discord');
const potDB = require('../pots/pot-model.js');
const Hook = new webhook.Webhook(process.env.WEBHOOK);


server.get('/', (req,res) => {
    resetDB.getResets()
        .then( async resets => {
            res.status(200).json(resets)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})



server.post('/add', (req,res) => {
    resetDB.submitReset(req.body)
    .then( reset => {
        res.status(200).json('success')
    })
    .catch( err => console.log(err)) 
})

server.delete('/wipe', (req,res)=>{
    resetDB.deleteReset()
    .then(del => res.status(200).json('deleted'))
    .catch( err => console.log(err))
})

module.exports = server;