var mongoose              = require('mongoose');
var Schema                = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var Puppy                 = require('./Puppy');

var UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  zipCode: String,
  bio: String,
  url: String,
  puppies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Puppy'
  }]

});

UserSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', UserSchema);
