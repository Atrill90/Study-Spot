const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const db = require("../models");

module.exports = function (passport) {
    passport.use(new LocalStrategy({
        usernameField: 'userName'
    }, (userName, password, done) => {
        console.log("hello passport");
        db.Users.findOne({ userName: userName})
        .then((user) => {
        console.log(user);
            // This is where the user will be returned if there is one
            let hashPassword = user.password;
            if (!user) {
                return done(null, false, {
                    message: "No user found"
                })
            }
            // Using bcrypt to compare the password to the hashed stored password
            bcrypt.compare(password, hashPassword, (err, isMatch) => {
                if (err) throw err;
                // if the passwords match give us the user
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {
                        message: "Password incorrect"
                    });
                }
            })

        }).catch((err) => {
            console.log(err);
        });
    }));
    // Serializing the user
    passport.serializeUser((user, done) => {
        console.log("serializing");
        done(null, user.id)
        
    });
    //Deserializing the user (this is copy pasta from passport)
    passport.deserializeUser((id, done) => {
        db.User.findOne({ id: id})
        .then((user) => {
            console.log("deserializing");
            done(null, user)
        });
    });
}