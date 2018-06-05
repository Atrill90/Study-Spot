const express = require("express");
const path = require("path");
const expressValidator = require('express-validator');
const expressSession = require('express-sessions');
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");


//Load Models
require("./models/Users");


//Load Routes
const auth = require("./routes/auth");
const newSpot = require ("./routes/newSpot");



//MongoConnect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/StudySpot");


const app = express();
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });



//Use Routes
app.use("/auth",auth);
app.use("/newSpot",newSpot);






// If no API routes are hit, send the React app
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

//Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
