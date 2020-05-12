const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport')


passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify']
}, (accessToken, refreshToken, profile, done) => {
        const user = [accessToken, profile]
        return done(null, user)
}))