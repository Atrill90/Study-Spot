const mongoose = require("mongoose");
const Spots = mongoose.model('Spots');
const express = require('express');
const router = express.Router();
const path = require('path');


module.exports = {
    create: function(req, res) {
        let errors = [];
        console.log(req.body.locationName);
        Spots.findOne({ locationName: req.body.locationName}).then((spot)=>{
            if(spot) {
                errors.push({
                    text: "This spot already exists, please enter a new spot"
                });
                res.redirect('http://locathost:3001/addSpot',{
                    errors: errors,
                });

            } else {
                // location grabbing goes here
                // console.log(res);

                Spot.create(newSpot).then(function (spot){
                    res.redirect('newSpot/api/spots')
                })
            }
        })


    },
   
        read: function(req, res) {
            Spots
              .find({})
              .sort({ locationName: 1 })
              .then(spots => res.json(spots))
              .catch(err => res.status(422).json(err));
    }








}
