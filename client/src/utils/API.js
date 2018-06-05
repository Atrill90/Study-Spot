import axios from "axios";

export default {
  // Gets all user

  // Gets the user with the given id
  loginUser: function(id) {
    return axios.get("/auth/users/login" + id);
  },
  
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/auth/users/register", userData);
    console.log("User saved");
  },
   // Saves a user to the database
   saveSpot: function(spotData) {
    return axios.post("/api/spots", spotData);
    console.log("we did it");
   },
};