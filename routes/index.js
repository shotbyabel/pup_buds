var express = require('express');
var passport= require('passport');
var router = express.Router();
var User = require('../models/User');

var UsersController = require("../controllers/Users");
var PuppiessController = require("../controllers/Puppies");



var authenticateUser = passport.authenticate('local',{failureRedirect: '/login'}

);

var isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) res.redirect('/login');
  return next();
};

var loadCurrentUser = function(req, res, next) {
  if (req.session.passport) {
    User
      .findOne({ username: req.session.passport.user })
      .then(
        function(user) {
          /// plug the current User instance to the req
          req.currentUser = user;
          next();
        }, function(err) {
          return next(err);
      });
  } else {
    next();
  }
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pup Buds' });
});

// ///*AUTH/REGISTER ROUTES*///
// router.get('/register', function (req, res) {
//   res.render('auth/register');
// });

// router.post('auth/register', function (req, res) {
//   User.register(new User({name: req.body.name}), req.body.password, function(err, user) {
//     if (err) return res.render('auth/register', {user: user});
//     passport.authenticate('local')(req, res, function () {
//       req.session.save(function (err) {
//         if (err) {
//           return next(err);
//         }// WHERE ARE WE REDIRECTING TO the index??
//         res.redirect('/');
//       });
//     });
//   });
// });

//login form //IF we call our view login
router.get('/login', function (req, res) {
  res.render('auth/login', {user : req.user});
});

//login submit handler
router.post('/login', passport.authenticate(
  'local',
  {
    failureRedirect: '/login'
  }),


  function (req, res, next) {
    req.session.save(function (err) {
      if (err) return next(err);
      //to home / index?
      res.redirect('/');
    });
  }
);

//User log outs
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


// chat page
router.get('/chat', function (req, res, next) {
  res.render('users/chat');
});

//isLoggedIn MIDDLEWARE//

//SecretRoute

//Defined routes
router.get('/register', UsersController.userNew);
router.post('/register', UsersController.userCreate);


module.exports = router;
