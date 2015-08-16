var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  password: String,
  age: Number,
  email: String,
  kids: Boolean,
  zip: String,
  profile_pic: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;


