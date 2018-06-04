import axios from "axios";

export default {
  // Gets all user

  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/login/" + id);
  },
  
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
    console.log("we did it");
  },
   // Saves a user to the database
   saveSpot: function(userData) {
    return axios.post("/api/spots", userData);
    console.log("we did it");
   },
};