var passport = require('passport');

var User = require('../models/User');

var userIndex = function(req, res, next){

};


var show = function(req, res, next){
    User.findById(req.params.id)
      .then(function(user) {
        res.render(
          '/show',
          {
            user:req.user
        });
      }, function(err) {
        return next(err);
      });
      };

// };

//new User
var userNew = function(req, res){
  res.render('./auth/register');
};

//saves the new user to db this will go to one route
var userCreate = function(req, res){
 User.register(new User({username: req.body.username, name: req.body.name}), req.body.password, function(err, user) {
    if (err) return res.render('auth/register', {user: user});
    passport.authenticate('local')(req, res, function () {
      req.session.save(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    });
  });
};
// //new owner
// var ownerNew = function(req, res, next){
// };
// //saves the new owner to db this will go to a different route than n user
// var ownerCreate = function(req, res, next){

// };
var destroy = function(req, res, next){

};

module.exports = {

  
    userNew:      userNew,
    userCreate:   userCreate,
    show:         show
};

// res.render('users/chat', {user: req.user}); {otherUser: req.username}

///So there will be two different forms one is to register as a user
//and the other is to register as an owner
//that will be an option in the forms when a user clicks register
//it will go to one route when a owner clicks register it will
//go to another route
//we are doing tis since u cant authenticate more than one model

