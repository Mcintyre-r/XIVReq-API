const server = require('express').Router();
const setDB = require('./set-model')



server.get('/', (req,res) => {
    if(req.query.name){
        console.log(req.query.name)
        setDB.getSet(req.query.name)
        .then( set => {
            if(set){
                res.status(200).json({class: set.Class})
            } else {
                res.status(404).json('This set does not exist')
            }
        })
        .catch(err => console.log(err))
    } else {
        res.status(404).json('No query provided')
    }
})


module.exports = server;