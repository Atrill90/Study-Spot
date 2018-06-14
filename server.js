const express = require("express");
const path = require("path");
const expressValidator = require('express-validator');
const session = require('express-session');
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const cookieParser = require("cookie-parser");

require("dotenv").config();

// Load Models
// require("./models/Users");
// require("./models/Spots");

const db = require("./models");

//Passport Strategy
require("./config/passport")(passport);

app.use(passport.initialize());
app.use(passport.session());

//Session Setup
app.use(session({
  secret:'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: new Date(Date.now() + (60 * 3000 * 30))}
}));

mongoose.Promise = global.Promise;
//MongoConnect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/StudySpot")
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err));



// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Send every request to the React app



//Use Routes
app.use(require('./routes'));

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
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
