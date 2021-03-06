const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spotSchema = new Schema({
    id: { type: Number, required: false},
    locationName: { type: String, required: true },
    noiseRating: { type: Number, required: true },
    image: { type: String, required: false},
    outletRating: { type: Number, required: true },
    wifiRating: { type: Number, required: true },
    seatingRating: { type: Number, required: true },
    fDRating: { type: Number, required: true },
    lat: { type: Number, required: false },
    lng: { type: Number, required: false },
    formattedAddress: { type: String, required: false},
    yelpRating: { type: Number, required: false },
    overallRating:  { type: Number, required: false },
    phone:  { type: String, required: false },
    date: { type: Date, default: Date.now }
  });
  
   let Spots = mongoose.model("Spots", spotSchema);
   module.exports = Spots;