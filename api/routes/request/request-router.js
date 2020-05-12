const server = require('express').Router();
const request = require('./request-model.js')
function isAuthorized(req,res,next){
    if(req.session.user){
        next()
    } else {
        res.status(401).send('user must be logged in')
    }
}


server.get('/',  (req,res) => {
    request.getRequests()
        .then( requests => {
            console.log("user:", req.session)
            res.status(200).json({ "Requests": requests, "user": req.session.user})
        })
        .catch(err => {
            res.status(400).json({ "error": err})
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