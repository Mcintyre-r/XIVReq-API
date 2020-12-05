const auth = require('express').Router();
const userDB = require('../user/user-model.js')
const fetch = require('node-fetch')



auth.get('/login', (req,res)=>{
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${process.env.CLIENT_REDIRECT}`)
});



auth.get('/redirect', (req,res)=>{  
    const data = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: process.env.CLIENT_REDIRECT,
      code: res.req.query.code,
      scope: 'identify guilds email',
    }

    fetch(`https://discordapp.com/api/oauth2/token`,
      {
        method: 'POST',
        body: new URLSearchParams(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      })
      .then( res=> res.json())
      .then( info =>  fetch('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${info.token_type} ${info.access_token}`
        }
      }))
      .then( res => res.json())
      .then( user => {
        console.log('login:',user)
         const newUser = {
           uuid: user.id,
           username: user.username,
           avatar: user.avatar,
           discriminator: user.discriminator,
         }
         console.log(newUser)
        userDB.getUser(newUser.uuid)
         .then( user => {
           if(!user){
            userDB.addUser(newUser)
            .then( uuid => res.redirect(`${process.env.HOST}?user=${uuid}`) )    
           } else {
             userDB.updateUser(newUser)
             .then( uuid => res.redirect(`${process.env.HOST}?user=${uuid}`) )   
           }
         })

      })
});



module.exports = auth;