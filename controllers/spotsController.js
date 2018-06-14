const mongoose = require("mongoose");
const Spots = mongoose.model('Spots');
const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');
require("dotenv").config();

module.exports = {
    create: function(req, res) {
        let errors = [];
        let token = process.env.YELP_API_KEY;
              
        let query = encodeURIComponent(req.body.locationName);
        // console.log(query);
        
            axios.get(`https://api.yelp.com/v3/businesses/search?latitude=28.602&longitude=-81.200&term=${query}`,{ 
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                let searchResult = response.data.businesses[0];
                let realName = searchResult.name.replace(/\\"/g, '"');
                console.log(req.body.locationName);
                Spots.findOne(
                    { locationName: realName})
                    .then((spot)=>{
                        if(spot) {
                            errors.push({
                                text: "This spot already exists, please enter a new spot"
                            });
                            res.send({
                                errors: errors,
                            });
                        }
                    
                        else {
               
              
                        // create the spot object
                        
                        let photo = searchResult.image_url;
                        let businessID = searchResult.id;
                        let businessAddress = searchResult.location.display_address[0];
                        let phone = searchResult.display_phone;
                        let lat = searchResult.coordinates.latitude;
                        let lng = searchResult.coordinates.longitude;
                        let yelpRating = searchResult.rating;
                        let addedRatings = parseInt(req.body.noiseRating) + parseInt(req.body.outletRating) + parseInt(req.body.wifiRating) + parseInt(req.body.seatingRating) + parseInt(req.body.fDRating) + parseInt(yelpRating);
                        let overallRating = parseFloat((addedRatings / 6).toFixed(1));
                        console.log(addedRatings);


                         let newSpot = {
                            locationName: realName,
                            noiseRating : req.body.noiseRating,
                            image : photo,
                            outletRating : req.body.outletRating,
                            wifiRating : req.body.wifiRating,
                            seatingRating : req.body.seatingRating,
                            fDRating : req.body.fDRating,
                            lat : lat, 
                            lng : lng,
                            formattedAddress : businessAddress,
                            yelpRating : yelpRating,
                            overallRating : overallRating,
                            phone : phone

                        }

                        console.log(newSpot);
                        Spots.create(newSpot).then(function (spot) {
                            res.sendStatus(200)
                        })
                    }
                })
        }).catch(error => {
            console.log(error);
        })
    },
    read: function(req, res) {
        Spots
        .find({})
        .sort({ overallRating: -1 })
        .then(spots => res.json(spots))
        .catch(err => res.status(422).json(err));
    }
}


