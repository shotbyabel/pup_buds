var express = require('express');
var router = express.Router();

//||||||||||||||||||||||||||--
// REQUIRE PASSPORT
//||||||||||||||||||||||||||--
var passport = require('passport');
var methodOverride = require('method-override');

//||||||||||||||||||||||||||--
// REQUIRE MODEL
//||||||||||||||||||||||||||--
var User    = require('../models/User');
var Message = require('../models/Message');

//||||||||||||||||||||||||||--
// NEW USER
//||||||||||||||||||||||||||--
function usersNew  (req, res) {
  res.render('auth/register');
};

//||||||||||||||||||||||||||--
// ADD USER TO DATABASE
//||||||||||||||||||||||||||--
var usersChat = function(req, res, next) {
  User.findOne({_id: req.params.id}, function(err, userTwo) {
    Message.find({$or: [{$and: [{sender: req.user.username}, {receiver: userTwo.username}]},
                        {$and: [{sender: userTwo.username}, {receiver: req.user.username}]}]},
                        function(err, messages) {
                          res.render('users/chat', {title: 'Pup Buds', user: userTwo, userOne: req.user, messages: messages});
                        })
  });
};

function usersCreate (req, res) {
  User.register(new User({
    username: req.body.username,
    name: req.body.name,
    zipCode: req.body.zipCode,
    age: req.body.age,
    bio: req.body.bio,
    url: req.body.url
  }), req.body.password, function(err, user) {
    // if (err) { console.log(err); return res.render('auth/register', {user: user}); }
    if (err) return res.render('auth/register', {user: user});
    passport.authenticate('local')(req, res, function () {
      req.session.save(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect('/users/' + req.user.id); //+ id here?
      });
    });
  });
};

var userShow = function(req, res, next){
  var id = req.params.id;

  User.findById({_id:id}, function(error, user){
    if (error) res.json({message: 'Could not find user because ' + error});
    res.render(
      './users/show', {
        user: req.user
      });
  });
};


var userEdit = function(req, res, next){
  var id = req.params.id;

  User.findById({_id:id}, function(error, user){
    if(error) res.json({message: 'Could not find user because ' + error});
    res.render(
      './users/edit', {
        user: req.user
      });
  });
};


var userUpdate = function(req, res, next) {
  var id = req.params.id;

  User.findById({_id: id}, function(error, user) {
    if (error) res.json({message: 'Could not find user because ' + error});

    if (req.body.name) user.name = req.body.name;
    if (req.body.age) user.age = req.body.age;
    if (req.body.bio) user.bio = req.body.bio;
    if (req.body.zipCode) user.zipCode = req.body.zipCode;
    if (req.body.url) user.url = req.body.url;

    user.save(function(error) {
      if (error) res.json({message: 'User successfully updated'});
      res.redirect('/users/' + id);
    });
  });
};

 var userDelete = function(req,res){
  var id = req.params.id;

  User.findByAndRemove({_id: id}, function(error){
    if (error) res.send(error);
    res.redirect('/')
  });
 };


module.exports = {

    usersChat:     usersChat,
    usersNew:      usersNew,
    usersCreate:   usersCreate,
    userShow:      userShow,
    userEdit:      userEdit,
    userUpdate:    userUpdate,
    userDelete:    userDelete

};

// res.render('users/chat', {user: req.user}); {otherUser: req.username}

///So there will be two different forms one is to register as a user
//and the other is to register as an owner
//that will be an option in the forms when a user clicks register
//it will go to one route when a owner clicks register it will
//go to another route
//we are doing tis since u cant authenticate more than one model

