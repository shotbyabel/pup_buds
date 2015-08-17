var mongoose              = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Puppy                 = mongoose.model('Puppy');




var OwnerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  picture: String,
  email: String,
  zip_code: String,
  bio: String,
  puppies: [{
    type: Schema.Types.ObjectId,
    ref: 'Puppy'
  }]
});

Owner.plugin(passportLocalMongoose);

var Owner = mongoose.model('Owner', OwnerSchema);
module.exports = Owner;


