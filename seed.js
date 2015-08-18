var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/pup_buds');

var User = require('./models/User');
var Puppy = require('./models/Puppy');

var fooPuppy, fundlePuppy, newUsers, newPuppies;



newUsers = [
  {
    name: "John",
    age: 30,
    zipCode: "90026",
    bio: "I'm a friendly guy!",
    picture: "#",
    puppies: [//Puppy.findOne({name:"Fundle"}, function(err, puppy){
      //return puppy._id;
    //})
    ]
  },
  {
    name: "Bob",
    age: 28,
    zipCode: "90026",
    bio: "I'm a friendly guy!",
    picture: "#",
    puppies: [//Puppy.findOne({name:"Foo"}, function(err, puppy){
      //return puppy._id;
    //})
    ]
  }
]

newPuppies = [
  {
    name: "Fundle",
    age: 8,
    therapy: false,
    friendliness: "Really friendly",
    hypoallerginc: true,
    size: "Really small",
    users: [//{
      //type: mongoose.Schema.Types.ObjectId,
      //ref: User.findOne({name:"John"})
    //}
    ]
  },
  {
    name: "Foo",
    age: 7,
    therapy: false,
    friendliness: "Really friendly",
    hypoallerginc: true,
    size: "Really small",
    users: [//{
      //type: mongoose.Schema.Types.ObjectId,
      //ref: User.findOne({name:"Bob"})
    //}
    ]
  }
]

User.remove({}, function(err){
  Puppy.remove({}, function(err){
    Puppy.create(newPuppies, function(err, puppies){
     console.log(puppies.length + " puppies created.");
      newUsers.forEach(function(user){
        User.register(new User({
          name: user.name,
          age: user.age,
          zipCode: user.zipCode,
          bio: user.bio,
          picture: user.picture,
          puppies: user.puppies
        })
      )}
    );
   });
  });
});



// User
//   .create(newUsers, function(err) {

//   });
//   .then(
//     function(users){
//       console.log(users.length + " users seeded");
//     }, function(err){
//       console.log(err);
//     });

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




