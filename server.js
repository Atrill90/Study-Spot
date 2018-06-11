const express = require("express");
const path = require("path");
const expressValidator = require('express-validator');
const expressSession = require('express-sessions');
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

// Load Models
// require("./models/Users");
// require("./models/Spots");

const db = require("./models");
//Load Routes
// const auth = require("./routes/auth");
// const newSpot = require ("./routes/newSpot");


mongoose.Promise = global.Promise;
//MongoConnect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/StudySpot");



// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Send every request to the React app



//Use Routes
app.use(require('./routes'));

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});




// If no API routes are hit, send the React app
// app.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

//Server Setup
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
