const mongoose = require("mongoose");
const User = mongoose.model('Users');
const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

module.exports = {
    create: function(req, res) {
        let errors = [];
        console.log(req.body);
        if (req.body.password.length < 5) {
            errors.push({
                text: "Password must be at least 5 characters"
            });
        }
        if (errors.length > 0) {
            //This will allow us to refresh the page but keep the users info populated if they cause an error.
            res.send( {
                errors: errors,
                userName: req.body.userName,
                email: req.body.email
    
            });
        } else {
            // Find if a user already exists
           User.findOne({ userName: req.body.userName})
            .then((user) => {
                // If a user exists re-render the page and keep their fields populated
                if (user) {
                    errors.push({
                        text: "User already exists, please choose a new username"
                    });
                    res.send('user exists');
                } else {
                    let insecurePass = req.body.password;
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(insecurePass, salt, (err, hash) => {
                            let newUser = {
                                userName: req.body.userName.toLowerCase(),
                                firstName: req.body.firstName,
                                lastName:req.body.lastName,
                                email: req.body.email,
                                password: hash
                            }
                            User.create(newUser).then(function (user) {
                                res.send(user);
                            });
                        })
                    })
                }
            })
        }

    },
    login: function (req,res,next){
        res.send(req.user)
        

    },
    logout: function (req,res,next) {
        req.logout();
        res.send ("you are logged out");
    }
}