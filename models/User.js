var mongoose              = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  kids: Boolean,
  zipCode: String,
  picture: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

