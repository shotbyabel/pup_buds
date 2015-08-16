var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  age: Number,
  email: String,
  kids: Boolean,
  zip: String,
  profile_pic: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;


// module.exports = mongoose.model('User', UserSchema);