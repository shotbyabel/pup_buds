var mongoose    = require('mongoose');
var Schema      = mongoose.Schema

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
  size:           String,
  user: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }
});

//||||||||||||||||||||||||||--
// EXPORT SCHEMA
//||||||||||||||||||||||||||--
module.exports = mongoose.model('Puppy', PuppySchema);
