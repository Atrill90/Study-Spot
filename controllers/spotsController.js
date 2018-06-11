const mongoose = require("mongoose");
const Spots = mongoose.model('Spots');
const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');

module.exports = {
    create: function(req, res) {
        let errors = [];
        // console.log(req.body.locationName);
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
                let query = encodeURIComponent(req.body.locationName);
                console.log(query);
                function googleSearch(query) {
                    axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=28.602,-81.200&radius=15&unit=miles&key=AIzaSyBw0BYH9kzgKn12oW7Kqh46e0tpJ9EYg_U`)
                    .then(response => {
                        
                        
                         let searchResult =response.data.results[0];
                        //  console.log(searchResult);
                         let address = searchResult.formatted_address;
                         let lat = searchResult.geometry.location.lat;
                         let lng = searchResult.geometry.location.lng;
                         let googleRating = searchResult.rating;
                         let photo = searchResult.photos[0].photo_reference; 
                         let realName = searchResult.name;

                         let newSpot = {
                            locationName: realName,
                            noiseRating : req.body.noiseRating[0],
                            image : photo,
                            outletRating : req.body.outletRating[0],
                            wifiRating : req.body.wifiRating[0],
                            seatingRating : req.body.seatingRating[0],
                            fDRating : req.body.fDRating[0],
                            lat : lat, 
                            lng : lng,
                            formattedAddress : address,
                            googleRating : googleRating,
                        }

                        console.log(newSpot);
                        Spots.create(newSpot).then(function (spot) {
                            res.sendStatus(200)
                        })
                    })
                    
                   
                }

                googleSearch(query); 
               

               
            
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
