const auth = require('express').Router();
const passport = require('passport');

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });


auth.get('/',   passport.authenticate('discord'));



auth.get('/redirect', passport.authenticate('discord', { failureRedirect: '/forbidden' }), function (req,res){
     req.session.user = req.user
     console.log('session,', req.session.user)
    res.redirect('http://localhost:3000') })



module.exports = auth;