var mongoose              = require('monogoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Owner = new mongoose.Schema({
  name: String,
  age: Number,
  picture: String,
  email: String,
  puppy:
});

Owner.plugin(passportLocalMongoose);

module.exports = mongoose.model('Owner', Owner);


name: String
age: Number
profile_pic: url
email: String
puppy: *embeded / puppy_id
zip : String
description: String
