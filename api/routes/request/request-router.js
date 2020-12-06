const server = require('express').Router();
const request = require('./request-model.js')
const userDB = require('../user/user-model')
const webhook = require('webhook-discord')
const Hook = new webhook.Webhook(process.env.WEBHOOK)


server.get('/',  (req,res) => {
    request.getRequests(req.query.id)
        .then( requests => {
            res.status(200).json({ "Requests": requests})
        })
        .catch(err => {
            res.status(400).json({ "error": err})
        })
})



server.post('/submit', (req,res) => {
    const newUser = {
        uuid: req.body.user.id,
        username: req.body.user.username,
        avatar: req.body.user.avatar,
        discriminator: req.body.user.discriminator,
      }
    userDB.getUser(newUser.uuid)
        .then(user => {
            if(!user){
                userDB.addUser(newUser)
                .then( uuid => {
                    request.submitRequest(req.body.post)
                        .then( requests => {
                            res.status(200).json('success')
                        })
                        .catch( err => console.log(err))
                }) 
                .catch( err => console.log(err))   
               } else {
                userDB.updateUser(newUser)
                .then( uuid => {
                    request.submitRequest(req.body.post)
                    .then( requests => {
                        res.status(200).json('success')
                    })
                    .catch( err => console.log(err))
                })  
                .catch(err => console.log(err)) 
               }
        })
        .catch(err => console.log(err))
    
})

server.put('/claim', (req,res)=>{
    const requestId = req.body.requestId
    const user = req.body.user
    const update = {
        workerID: user.uuid,
        worker: `${user.username}#${user.discriminator}`,
        workerPicture: user.avatar,
        claimed: true
    }
    request.updateRequest(update, requestId)
        .then( update => res.status(200).json('success'))
        .catch( err => console.log(err))
})

server.put('/complete', (req,res)=>{
    console.log(req.body.request)
    const msg = new webhook.MessageBuilder()
        .setName('Req-Notify')
        .setText(`<@${req.body.request.requesterId}> your order of ${req.body.request.quantity} ${req.body.request.item} is now ready!`)
    request.updateRequest({completed: true}, req.body.request.id)
    .then( update => {
        Hook.send(msg)
            .catch(err => console.log(err))
        res.status(200).json('success')})
    .catch( err => console.log(err))
})

server.delete('/resolve', (req,res)=>{
    request.deleteRequest(req.body.request.id)
        .then(del => res.status(200).json('deleted'))
        .catch( err => console.log(err))
})

module.exports = server;