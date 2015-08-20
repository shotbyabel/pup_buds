var express           = require('express');
var router            = express.Router();
var passport          = require('passport');
var User              = require('../models/User');
var PuppiesController = require('../controllers/Puppies');
var SessionsController= require('../controllers/sessions');
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

var isLoggedIn = function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/login');
  }
  return next();
};



//renders sesssions controller
router.get('/login', SessionsController.sessionsNew);
router.post('/login', passport.authenticate(
  'local',
  {
    failureRedirect: '/login'
  }), SessionsController.sessionsCreate);
router.get('/logout', SessionsController.sessionsDelete);
//router.get('/secret', SessionsController.sessionsShow);


//renders puppies controller
router.get('/puppies', PuppiesController.renderPuppiesIndex);
router.get('/puppies/new', PuppiesController.renderPuppiesNew);
router.post('/puppies', PuppiesController.renderPuppiesCreate);
router.get('/puppies/:id/edit', PuppiesController.renderPuppiesEdit);
router.put('/puppies/:id', PuppiesController.renderPuppiesUpdate);
router.get('/puppies/:id', PuppiesController.renderPuppiesShow);


//renders users contoller
router.get('/auth/register', UsersController.usersNew);
router.post('/auth/register', UsersController.usersCreate);
router.get('/users/:id', UsersController.userShow);
router.get('/users/:id/edit', UsersController.userEdit);
module.exports = router;


