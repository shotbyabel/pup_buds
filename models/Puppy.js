var mongoose    = require('mongoose');
var Owner       = mongoose.model('Owner');
var User        = mongoose.model('User');

var PuppySchema = new mongoose.Schema({
  name: String,
  age: Number,
  therapy: Boolean,
  friendliness: String,
  hypoallerginc: Boolean,
  size: String,
  owners: [{
    type: Schema.Types.ObjectId,
    ref: 'Owner'
  }],
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

var Puppy = mongoose.model('Puppy', PuppySchema);
module.exports = Puppy;

