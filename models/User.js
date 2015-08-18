var mongoose              = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Puppy                 = require('./Puppy');

var UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  zipCode: String,
  bio: String,
  picture: String,
  puppies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Puppy'
  }]

});

UserSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', UserSchema);
