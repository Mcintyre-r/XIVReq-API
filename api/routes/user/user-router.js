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


server.put('/crafter',  (req,res) => {
    user.getUser(req.body.uuid)
        .then(person => {
            if(person){
                user.updateUser(req.body)
                    .then( result => {
                        res.status(200).json(result)
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(400).json(err)
                    })
            } else {
                user.addUser(req.body)
                    .then( result => {
                        res.status(200).json(result)
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(400).json(err)
                    })
            }
        })
    
})






module.exports = server;