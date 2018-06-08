const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spotSchema = new Schema({
    locationName: { type: String, required: true },
    noiseRating: { type: Number, required: true },
    outletRating: { type: Number, required: true },
    wifiRating: { type: Number, required: true },
    seatingRating: { type: Number, required: true },
    fDRating: { type: Number, required: true },
    image: { type: String, required: false},
    address: { type: String, required: false},
    latlng:{type:String, required: false},
    date: { type: Date, default: Date.now }
  });
  
   mongoose.model("Spots", spotSchema);