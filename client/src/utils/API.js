import axios from "axios";

export default {
  // Gets all books

  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  
  // Saves a book to the database
  saveUser: function(bookData) {
    return axios.post("/api/users", bookData);
  }
};