var express           = require('express');
var router            = express.Router();

//||||||||||||||||||||||||||--
// PASSPORT MIDDLEWARE WILL ADD AUTHETICATED USER TO EVERY REQ.
//||||||||||||||||||||||||||--
var passport          = require('passport');

//||||||||||||||||||||||||||--
// REQUIRE MODEL
//||||||||||||||||||||||||||--
var User              = require('../models/User');

//||||||||||||||||||||||||||--
// REQUIRE CONTROLLERS
//||||||||||||||||||||||||||--
var PuppiesController = require('../controllers/Puppies');
var SessionsController= require('../controllers/Sessions');
var UsersController   = require('../controllers/Users');

//||||||||||||||||||||||||||--
// ADDING ROOT PAGE
//||||||||||||||||||||||||||--
router.get('/', function (req, res) {
  res.render('index', {user: req.user});
});

//||||||||||||||||||||||||||--
// O_AUTHENTICATION ROUTES
//||||||||||||||||||||||||||--
router.get('/auth/facebook', passport.authenticate('facebook',
  {
    scope:
      [
        'email',
        'user_birthday',
        'user_location'
      ]
  })
);

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/home',
  failureRedirect: '/login'
  })
);

router.get('/auth/twitter', passport.authenticate('twitter',
  {
    scope:
      [
        'email',
        'user_location'
      ]
  })
);

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/home',
  failureRedirect: '/login'
  })
);

//||||||||||||||||||||||||||--
// CHECKS WHETHER USER IS LOGGED IN
//||||||||||||||||||||||||||--
var isLoggedIn = function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/login');
  }
  return next();
};


//||||||||||||||||||||||||||--
// RENDERS SESSSIONS CONTROLLER
//||||||||||||||||||||||||||--
router.get('/login',                        SessionsController.sessionsNew);
router.post('/login', passport.authenticate(
  'local',
  {
    failureRedirect: '/login'
  }),                                       SessionsController.sessionsCreate);
router.get('/logout',                       SessionsController.sessionsDelete);

//||||||||||||||||||||||||||--
// RENDERS PUPPIES CONTROLLER
//||||||||||||||||||||||||||--
router.get('/puppies',          isLoggedIn, PuppiesController.renderPuppiesIndex);
router.get('/puppies/new',      isLoggedIn, PuppiesController.renderPuppiesNew);
router.post('/puppies',         isLoggedIn, PuppiesController.renderPuppiesCreate);
router.get('/puppies/:id/edit', isLoggedIn, PuppiesController.renderPuppiesEdit);
router.put('/puppies/:id',      isLoggedIn, PuppiesController.renderPuppiesUpdate);
router.get('/puppies/:id',      isLoggedIn, PuppiesController.renderPuppiesShow);

//||||||||||||||||||||||||||--
// RENDERS USERS CONTOLLER
//||||||||||||||||||||||||||--
router.get('/auth/register',                UsersController.usersNew);
router.post('/auth/register',               UsersController.usersCreate);
router.get('/users/:id',        isLoggedIn, UsersController.userShow);
router.get('/users/:id/edit',   isLoggedIn, UsersController.userEdit);
module.exports = router;


