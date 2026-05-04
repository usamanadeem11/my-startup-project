const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  location: String,
  category: String,
  service: String,
  paymentId: String
});

module.exports = mongoose.model("User", userSchema);