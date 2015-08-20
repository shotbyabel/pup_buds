var mongoose              = require('mongoose');
var Schema                = mongoose.Schema;
//||||||||||||||||||||||||||--
// REQUIRE PASSPORT
//||||||||||||||||||||||||||--
var passportLocalMongoose = require('passport-local-mongoose');

//||||||||||||||||||||||||||--
// REQUIRE PUPPY MODEL
//||||||||||||||||||||||||||--
var Puppy                 = require('./Puppy');

//||||||||||||||||||||||||||--
// DEFINE USER SCHEMA
//||||||||||||||||||||||||||--
var UserSchema = new mongoose.Schema({
  name:    String,
  age:     Number,
  zipCode: String,
  bio:     String,
  url:     String,
  puppies: [{
        type:  mongoose.Schema.Types.ObjectId,
        ref:   'Puppy'
  }]

});

//||||||||||||||||||||||||||--
// INSERT PASSPORT MIDDLEWARE
//||||||||||||||||||||||||||--
UserSchema.plugin(passportLocalMongoose);

//||||||||||||||||||||||||||--
// EXPORT SCHEMA
//||||||||||||||||||||||||||--
module.exports = mongoose.model('User', UserSchema);
