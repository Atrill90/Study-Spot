const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

 let Users = mongoose.model("Users", userSchema);

 module.exports = Users;