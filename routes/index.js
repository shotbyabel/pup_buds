var express = require('express');
var router = express.Router();

var UsersController = require("../controllers/Users");
var PuppiessController = require("../controllers/Puppies");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// chat page
router.get('/chat', function(req, res, next) {
  res.render('users/chat');
});



module.exports = router;
