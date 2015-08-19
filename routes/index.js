var express           = require('express');
var router            = express.Router();
var passport          = require('passport');
var User              = require('../models/User');
var PuppiesController = require('../controllers/Puppies');
var SessionsController= require('../controllers/Sessions');
var UsersController   = require('../controllers/Users');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Pup Buds' });
// });
//passport middleware will add autheticated user to every req.
router.get('/', function (req, res) {
  res.render('index', {user: req.user});
});


//O_Authentication routes
router.get('/auth/facebook', passport.authenticate('facebook',
  {
    scope:
    [
      'email',
      'user_birthday',
      'user_location'
    ]
  }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/home',
  failureRedirect: '/login'
}));

router.get('/auth/twitter', passport.authenticate('twitter',
  {scope:
    [
      'email',
      'user_location'
    ]
}));

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/home',
  failureRedirect: '/login'
}));




//renders sesssions controller
router.get('/login', SessionsController.sessionNew);
router.get('/logout', SessionsController.sessionDelete);
router.get('/secret', SessionsController.sessionShow);
router.post('/login', SessionsController.sessionCreate);


//renders puppies controller
router.get('/puppies', PuppiesController.renderPuppiesIndex);
router.post('/puppies', PuppiesController.renderPuppiesCreate);
router.get('/puppies/new', PuppiesController.renderPuppiesNew);
router.get('/puppies/:id', PuppiesController.renderPuppiesEdit);
router.get('/puppies/:id', PuppiesController.renderPuppiesShow);


//renders users contoller
router.get('/auth/register', UsersController.usersNew);
router.post('/auth/register', UsersController.usersCreate);
router.get('/users/show', UsersController.userShow);
module.exports = router;




























































// var express = require('express');


// var passport= require('passport');
// var router = express.Router();
// var User = require('../models/User');

// var UsersController = require("../controllers/Users");
// var PuppiessController = require("../controllers/Puppies");

// var authenticateUser = passport.authenticate('local',{failureRedirect: '/login'}

// );

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Pup Buds' });
// });

// var isLoggedIn = function(req, res, next) {
//   if (req.isAuthenticated()) res.redirect('/login');
//   return next();
// };

// var loadCurrentUser = function(req, res, next) {
//   if (req.session.passport) {
//     User
//       .findOne({ username: req.session.passport.user })
//       .then(
//         function(user) {
//           /// plug the current User instance to the req
//           req.currentUser = user;
//           next();
//         }, function(err) {
//           return next(err);
//       });
//   } else {
//     next();
//   }
// };

// //login form //IF we call our view login
// router.get('/login', function (req, res) {
//   res.render('auth/login', {user : req.user});
// });

// //login submit handler
// router.post('/login', passport.authenticate(
//   'local',
//   {
//     failureRedirect: '/login'
//   }),

//   function (req, res, next) {
//     req.session.save(function (err) {
//       if (err) return next(err);
//       //to home / index?
//       res.redirect('/');
//     });
//   }
// );

// This is going to be our view when a user is logged in
// router.get('/home', isLoggedIn, function(req, res, next) {
//   console.log(req.user);
//   res.render('index', { title: 'Express', user: req.user });
// });

// //facebook authorization
// router.get('/auth/facebook', passport.authenticate('facebook',
//   {
//     scope:
//     [
//       'email',
//       'user_birthday',
//       'user_location'
//     ]
//   }));

// router.get('/auth/facebook/callback', passport.authenticate('facebook', {
//   successRedirect: '/index',
//   failureRedirect: '/login'
// }));

// //User log outs
// router.get('/logout', function (req, res) {
//   req.logout();
//   res.redirect('/');
// });


// // chat page
// router.get('/chat', function (req, res, next) {
//   res.render('users/chat');
// });

// //isLoggedIn MIDDLEWARE//

// //SecretRoute


// router.get('/login', function(req, res, next){
//   res.render('auth/login', {title: 'Log in'});
// });

// router.get('/logout', function(req, res, next){
//   req.logout();
//   res.redirect('/login');
// });
// //Defined routes
// router.get('/register', UsersController.userNew);
// // router.post('/register', UsersController.userCreate);
// function isLoggedIn(req, res, next){
//   if (req.isAuthenticated()) return next();
//   res.redirect('/login');
// };

// function isLoggedIn(req, res, next){
//   if(req.isAuthenticated()) return next();
//   res.redirect('/login');
// }

// module.exports = router;
