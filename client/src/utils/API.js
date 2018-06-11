import axios from "axios";

export default {
  // Gets all user

  // Gets the user with the given id
  loginUser: function(userName) {
    return axios.get("/auth/users/login" + userName);
  },
  
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/auth/users/register", userData);
    console.log("User saved");
  },
   // Saves a user to the database
   saveSpot: function(spotData) {
    return axios.post("/api/spots", spotData);
    
   },
   findAllSpots: function () {
     return axios.get("/api/spots")
   },
   getSpotInfo: function () {
     return axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.602,-81.200&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyBw0BYH9kzgKn12oW7Kqh46e0tpJ9EYg_U")
   }
   
};