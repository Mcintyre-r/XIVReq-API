const server = require('express').Router();
const request = require('./request-model.js');
const userDB = require('../user/user-model');
const webhook = require('webhook-discord');
const potDB = require('../pots/pot-model.js');
const Hook = new webhook.Webhook(process.env.WEBHOOK);


server.get('/', (req,res) => {
    request.getRequests(req.query.id)
        .then( async requests => {
            const pots = await potDB.getRequests(req.query.id)
            res.status(200).json({ "Requests": [...requests,...pots]})
        })
        .catch(err => {
            res.status(400).json(err)
        })
})



server.post('/submit', (req,res) => {
    const newUser = {
        uuid: req.body.user.uuid,
        username: req.body.user.username,
        avatar: req.body.user.avatar,
        discriminator: req.body.user.discriminator,
      }
    userDB.getUser(newUser.uuid)
        .then(user => {
            if(!user){
                userDB.addUser(newUser)
                .then( uuid => {
                    if(req.body.request.quantity){
                        potDB.submitRequest(req.body.request)
                        .then( requests => {
                            res.status(200).json('success')
                        })
                        .catch( err => console.log(err))
                    } else {
                        request.submitRequest(req.body.request)
                        .then( requests => {
                            res.status(200).json('success')
                        })
                        .catch( err => console.log(err))
                    }
                }) 
                .catch( err => console.log(err))   
               } else {
                userDB.updateUser(newUser)
                .then( uuid => {
                    if(req.body.request.quantity){
                        potDB.submitRequest(req.body.request)
                        .then( requests => {
                            res.status(200).json('success')
                        })
                        .catch( err => console.log(err))
                    } else {
                        request.submitRequest(req.body.request)
                        .then( requests => {
                            res.status(200).json('success')
                        })
                        .catch( err => console.log(err))
                    }
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
    let requester;
    if(req.body.request.quantity){
        potDB.getSpecificRequests(requestId)
        .then( requested => {
                console.log(requested)
                requester = requested[0].requesterId
                const msg = new webhook.MessageBuilder()
                    .setName('Req-Notify')
                    .setText(`<@${requester}> an order you submitted has been claimed by <@${user.uuid}>. Please connect with them to deliver any required materials.`)
                    potDB.updateRequest(update, requestId)
                    .then( update => {
                        Hook.send(msg)
                            .catch(err => console.log(err))
                        res.status(200).json('success')})
                    .catch( err => console.log(err))
            }
        )
        .catch(err => console.log(err))
    } else {
    request.getSpecificRequests(requestId)
        .then( requested => {
                console.log(requested)
                requester = requested[0].requesterId
                const msg = new webhook.MessageBuilder()
                    .setName('Req-Notify')
                    .setText(`<@${requester}> an order you submitted has been claimed by <@${user.uuid}>. Please connect with them to deliver any required materials.`)
                    request.updateRequest(update, requestId)
                    .then( update => {
                        Hook.send(msg)
                            .catch(err => console.log(err))
                        res.status(200).json('success')})
                    .catch( err => console.log(err))
            }
        )
        .catch(err => console.log(err))
    }
    
})

server.put('/complete', (req,res)=>{
    const msg = new webhook.MessageBuilder()
        .setName('Req-Notify')
        .setText(`<@${req.body.request.requesterId}> an order you submitted is now ready! Your crafter will connect with you to sort out delivery if not already discussed.`)
        if(req.body.request.quantity){
            potDB.updateRequest({completed: true}, req.body.request.id)
            .then( update => {
                Hook.send(msg)
                    .catch(err => console.log(err))
                res.status(200).json('success')})
            .catch( err => console.log(err))
        } else {
            request.updateRequest({completed: true}, req.body.request.id)
            .then( update => {
                Hook.send(msg)
                    .catch(err => console.log(err))
                res.status(200).json('success')})
            .catch( err => console.log(err))
        }
})

server.delete('/resolve', (req,res)=>{
    if(req.body.request.quantity){
        potDB.deleteRequest(req.body.request.id)
        .then(del => res.status(200).json('deleted'))
        .catch( err => console.log(err))
    } else {
        request.deleteRequest(req.body.request.id)
        .then(del => res.status(200).json('deleted'))
        .catch( err => console.log(err))
    }

})

module.exports = server;