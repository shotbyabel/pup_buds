var express = require('express');
var mongoose = require('mongoose');

//||||||||||||||||||||||||||--
// REQUIRE MODELS
//||||||||||||||||||||||||||--
var Puppy = require('../models/Puppy');
var User = require('../models/User');

var router = express.Router();

module.exports.renderPuppiesIndex = function(req, res, next){
  Puppy.find({}, function(err, puppies){
    if (err) res.send('> ' + err);
    res.render('puppies/index', {
      puppies: puppies
    }, {user: req.user});
  });
};

module.exports.renderPuppiesNew = function(req,res){
  res.render('puppies/new', {user: req.user});
};


module.exports.renderPuppiesCreate = function(req,res,next){
  var puppy = new Puppy({
    name:           req.body.name,
    age:            req.body.age,
    therapy:        req.body.therapy,
    friendliness:   req.body.friendliness,
    hypoallergenic: req.body.hypoallergenic,
    url:            req.body.url,
    size:           req.body.size
  });
  console.log(req.body);
  puppy.save(function(error){
    if(error){
      res.send('> ' + err);
      res.redirect('/puppies');
    }
    res.redirect('/puppies/' + req.user.id)
  });
};


module.exports.renderPuppiesEdit = function(req,res,next){
  Puppy.findOne(req.params.id, function(error, puppy){
    if(error) return res.send(error);
    res.render('puppies/edit', {user: req.user});
  });
};

 module.exports.renderPuppiesUpdate = function(req,res,next){
  Puppy.update(req.params.id,{
    name: req.body.name,
    age: req.body.age,
    therapy: req.body.therapy,
    friendliness: req.body.friendliness,
    hypoallergenic: req.body.hypoallergenic,
    size: req.body.size
  }, function(error){
    if (error) res.send(error);
    res.redirect('/puppies');
  });
};


module.exports.renderPuppiesShow = function(req,res,next){
  Puppy.findById(req.params.id, function(err, puppy) {
    if (err) return res.send(error);
    var puppy = {puppy:puppy}
    res.render('puppies/show', {user: req.user});
  });
};
