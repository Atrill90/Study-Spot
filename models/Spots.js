const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    location: { type: String, required: true },
    noiseRating: { type: Number, required: true },
    outletRating: { type: Number, required: true },
    wifiRating: { type: Number, required: true },
    seatingRating: { type: Number, required: true },
    fDRating: { type: Number, required: true },
    date: { type: Date, default: Date.now }
  });
  
   mongoose.model("Users", userSchema);