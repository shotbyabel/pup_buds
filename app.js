require('dotenv').load();
var express   = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


// require modules for mongoose and passport
var passport= require('passport');
var LocalStrategy = require('passport-local').Strategy;
var routes = require('./routes/index');

//O_Auth
var Facebook = require('./config/facebook');
var Twitter  = require('./config/twitter');

var app = express();

// CONNECT to our mongo database
mongoose.connect('mongodb://localhost:27017/pup_buds');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));


//authorize middleware
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.locals.title = 'PupBuds';

//Source in models

var User  = require('./models/User');
var Puppy = require('./models/Puppy');
var Message = require('./models/Message');

//
app.use('/', routes);

// passport config
var User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// connect to MongoDB
// mongoose.connect('mongodb://localhost/passport-auth');

// start the server
app.listen();
console.log('3000 is the magic port!');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
