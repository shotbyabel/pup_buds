var mongoose    = require('mongoose');

//||||||||||||||||||||||||||--
// REQUIRE USER MODEL
//||||||||||||||||||||||||||--
var User        = require('./User');

//||||||||||||||||||||||||||--
// DEFINE PUPPY SCHEMA
//||||||||||||||||||||||||||--
var PuppySchema = new mongoose.Schema({
  name:           String,
  age:            Date,
  therapy:        Boolean,
  friendliness:   String,
  hypoallerginc:  Boolean,
  url:            String,
  size:           String
});

//||||||||||||||||||||||||||--
// EXPORT SCHEMA
//||||||||||||||||||||||||||--
module.exports = mongoose.model('Puppy', PuppySchema);
