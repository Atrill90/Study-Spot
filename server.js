const express = require("express");
const path = require("path");
const expressValidator = require('express-validator');
const expressSession = require('express-sessions');
const mongoose = require("mongoose");
const routes = require("./routes");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//MongoConnect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/StudySpot");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
