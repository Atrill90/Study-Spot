const mongoose = require("mongoose");
const Spots = mongoose.model('Spots');
const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');

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
                let query = req.body.locationName;
                
                function googleSearch(query) {
                    axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=28.602,-81.200&radius=15&unit=miles&key=AIzaSyBw0BYH9kzgKn12oW7Kqh46e0tpJ9EYg_U`)
                    .then(response => {
                        res.sendStatus(200);
                         let searchResult =response.data.results[0];
                         let address = searchResult.formattedaddress;
                         let lat = searchResult.geometry.location.lat;
                         console.log(searchResult);

                    })
                }

                googleSearch(query); 
               
/*
                Spot.create(newSpot).then(function (spot) {
                    res.redirect('newSpot/api/spots')
                })
            */
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
