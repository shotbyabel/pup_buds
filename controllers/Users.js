var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();





//new User
function usersNew  (req, res) {
  res.render('auth/register');
};

function usersCreate (req, res) {
  User.register(new User({
    username: req.body.username,
    name: req.body.name
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
 User.findById(req.params.id).populate("puppies").exec(function(error, users){
        res.render('users/show', {user: req.user});

 });
};






module.exports = {

    usersNew:      usersNew,
    usersCreate:   usersCreate,
    userShow:     userShow

};

// res.render('users/chat', {user: req.user}); {otherUser: req.username}

///So there will be two different forms one is to register as a user
//and the other is to register as an owner
//that will be an option in the forms when a user clicks register
//it will go to one route when a owner clicks register it will
//go to another route
//we are doing tis since u cant authenticate more than one model

