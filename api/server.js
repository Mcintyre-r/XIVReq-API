require('dotenv').config()
const express = require('express');
const cors = require("cors");
const requestRouter = require('./routes/request/request-router')
const authRouter = require('./routes/auth/auth-router')
const server = express();







server.use(express.json());
server.use(cors());
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",  '*');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Credentials", true);
    next(); 
});
server.use((err,req,res,next)=>{
    switch (err.message) {
        case 'NoCodeProvided':
            return res.status(400).send({
                status: 'ERROR',
                error: err.message,
            });
        default:
            return res.status(500).send({
                status: 'ERROR',
                error:err.message,
            })
    }
})


server.get('/', (req,res) => {
    res.status(200).json({message: 'Welcome to the Fantasy Zone, Get Ready!'})
});
server.use('/api/auth', authRouter)
server.use('/api/requests', requestRouter);
module.exports = server;