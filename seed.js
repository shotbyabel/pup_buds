var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/pup_buds');

var User = require('./models/User');
var Puppy = require('./models/Puppy');

User.remove({}, function(err){
  if (err) console.log(err);
});

Puppy.remove({}, function(err){
  if (err) console.log(err);
});

var newUsers = [
  {
    name: "John",
    age: 30,
    email: "jj@email.com",
    zipCode: "90026",
    bio: "I'm a friendly guy!",
    picture: "#",
    // puppies: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: Puppy.findOne({name:"Fundle"})
    // }]
  },
  {
    name: "Bob",
    age: 28,
    email: "bb@email.com",
    zipCode: "90026",
    bio: "I'm a friendly guy!",
    picture: "#",
    // puppies: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: Puppy.findOne({name:"Foo"})
    // }]
  }
]

var newPuppies = [
  {
    name: "Fundle",
    age: 8,
    therapy: false,
    friendliness: "Really friendly",
    hypoallerginc: true,
    size: "Really small",
    // users: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: User.findOne({name:"John"})
    // }]
  },
  {
    name: "Foo",
    age: 7,
    therapy: false,
    friendliness: "Really friendly",
    hypoallerginc: true,
    size: "Really small",
    // users: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: User.findOne({name:"Bob"})
    // }]
  }
]

Puppy
  .create(newPuppies)
  .then(
    function(puppies){
      console.log(puppies.length + " puppies seeded");
    }, function(err){
      console.log(err);
    });

User
  .create(newUsers)
  .then(
    function(users){
      console.log(users.length + " users seeded");
    }, function(err){
      console.log(err);
    });

mongoose.disconnect();

  //       Owners  = require('./models/Owners'),
  //       Puppies = require('/models/Puppies');


  // var newOwners = [

  // {

  //  name:,
  //  age:,
  //  email:,
  //  profile_pic:,
  //  puppy: (embedded Puppies id)
  //  zip:,

  // },
    // {

  //  name:,
  //  age:,
  //  email:,
  //  profile_pic:,
  //  puppy: (embedded Puppies id)
  //  zip:,

  // },








  // ];




