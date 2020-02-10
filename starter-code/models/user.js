const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;
