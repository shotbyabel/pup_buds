var mongoose              = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Puppy                 = mongoose.model('Puppy');





var UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  kids: Boolean,
  zipCode: String,
  picture: String
  puppies: [{
    type: Schema.Types.ObjectId,
    ref: 'Puppy'
  }]
});

User.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);
module.exports = User;
