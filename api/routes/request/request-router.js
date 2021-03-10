const server = require('express').Router();
const request = require('./request-model.js');
const userDB = require('../user/user-model');
const webhook = require('webhook-discord');
const setDB = require('../set/set-model.js');
const Hook = new webhook.Webhook(process.env.WEBHOOK);


server.get('/', (req,res) => {
    request.getRequests(req.query.id)
        .then( async requests => {
            for(const request of requests){
                if(request.set){
                    await setDB.getSet(request.setClass).then(set=>{
                        request.setItems ={

                            wpnID: '318'+set.wpnID,
                            wpnName: set.wpnName,
                            wpnIcon: 'https://xivapi.com'+set.wpnIcon,

                            headID: '318'+set.headID,
                            headName: set.headName,
                            headIcon: 'https://xivapi.com'+set.headIcon,

                            chestID: '318'+set.chestID,
                            chestName: set.chestName,
                            chestIcon: 'https://xivapi.com'+set.chestIcon,

                            handsID: '318'+set.handsID,
                            handsName: set.handsName,
                            handsIcon: 'https://xivapi.com'+set.handsIcon,

                            legsID: '318'+set.legsID,
                            legsName: set.legsName,
                            legsIcon: 'https://xivapi.com'+set.legsIcon,

                            feetID: '318'+set.feetID,
                            feetName: set.feetName,
                            feetIcon: 'https://xivapi.com'+set.feetIcon,

                            beltID: '318'+set.beltID,
                            beltName: set.beltName,
                            beltIcon: 'https://xivapi.com'+set.beltIcon,

                            earID: '318'+set.earID,
                            earName: set.earName,
                            earIcon: 'https://xivapi.com'+set.earIcon,

                            neckID: '318'+set.neckID,
                            neckName: set.neckName,
                            neckIcon: 'https://xivapi.com'+set.neckIcon,

                            wristID: '318'+set.wristID,
                            wristName: set.wristName,
                            wristIcon: 'https://xivapi.com'+set.wristIcon,

                            ringID: '318'+set.ringID,
                            ringName: set.ringName,
                            ringIcon: 'https://xivapi.com'+set.ringIcon

                        }
                        if(set.Class === 'pld'){
                            request.setItems.shdID = set.shdID 
                            request.setItems.shdName = set.shdName
                            request.setItems.shdIcon = 'https://xivapi.com'+set.shdIcon
                        } 
                    })
                }
            }
    
            res.status(200).json({ "Requests": requests})
        })
        .catch(err => {
            res.status(400).json(err)
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