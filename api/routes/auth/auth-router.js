const auth = require('express').Router();
const btoa = require('btoa')
const fetch = require('node-fetch')



const client_id = '706669135915909140'
const redirect = 'http://localhost:5000/api/auth/redirect'
const client_secret = 'Oy2aSEkID7k7a2mZsPfoviiIb2EcrJNs'

auth.get('/login', (req,res)=>{
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${client_id}&scope=identify&response_type=code&redirect_uri=${redirect}`)
});



auth.get('/redirect', (req,res)=>{  
    const data = {
      client_id,
      client_secret,
      grant_type: 'authorization_code',
      redirect_uri: redirect,
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
        res.redirect(`http://localhost:3000/?user=${user.id}`)
      })
});



module.exports = auth;