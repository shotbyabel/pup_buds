var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();

//GET '/login'
function sessionsNew  (req, res) {
  res.render('auth/login', {user : req.user});
};

//Post actually logs in
//double check this withOUt sessions Create..
function sessionsCreate (req, res, next) {
    req.session.save(function (err) {
      if (err) return next(err);
      console.log(req.id)
      res.redirect('/users/:id');
    });
  };


//GET '/logout'
function sessionsDelete  (req, res) {
  // req.logout();
  // res.redirect('/');
  req.session.destroy(function(err){
    res.redirect('/');
  })
};

// //GET /'secret'
// function sessionsShow (req, res) {isLoggedIn,
//   res.render('secret', {user: req.user});
// };

// middleware to make sure a user is logged in
// function isLoggedIn (req, res, next) {
//   // if user is authenticated in the session, carry on
//   if (req.isAuthenticated())
//     return next();
//   // if they aren't redirect them to the login page
//   res.redirect('/login');
// }

// router.get('/login', function
//session create
// router.get('/logout', function

module.exports = {
  sessionsNew: sessionsNew,
  sessionsCreate: sessionsCreate,
  // sessionsShow:   sessionsShow,
  sessionsDelete:  sessionsDelete
};
