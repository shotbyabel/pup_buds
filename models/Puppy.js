var mongoose    = require('mongoose');
var User        = require('./User');

var PuppySchema = new mongoose.Schema({
  name: String,
  age: String,
  therapy: Boolean,
  friendliness: String,
  hypoallerginc: Boolean,
  url: String,
  size: String
});


module.exports = mongoose.model('Puppy', PuppySchema);
