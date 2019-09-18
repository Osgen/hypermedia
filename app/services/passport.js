const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');//get my config keys
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id)
        .then(user=>{
            done(null, user);
        });
});

passport.use(new googleStrategy({//set googleStrategy objects attributes 

    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'

    }, (accessToken, refreshToken, profile, done) => {//callback of connection
        User.findOne({googleId:profile.id})//search for existing id
            .then((existingUser)=>{
                if(!existingUser){
                    //we do not have a record with the same id, therefore we save it.
                    new User({googleId: profile.id}).save();
                        // .then(user=> done(null, user));//tell passport to finish it sending the new user
                }else{
                    // we do have the same id saved
                    // done(null, existingUser);//tell passport to finish it sending the existing user
                }
            })
    })
);