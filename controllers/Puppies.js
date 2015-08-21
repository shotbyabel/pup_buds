var express = require('express');
var mongoose = require('mongoose');

//||||||||||||||||||||||||||--
// REQUIRE MODELS
//||||||||||||||||||||||||||--
var Puppy = require('../models/Puppy');
var User = require('../models/User');

var router = express.Router();

module.exports.renderPuppiesIndex = function(req, res, next){
  Puppy.find(function(err, puppies){
    if (err) res.send('> ' + err);
    res.render('./puppies',
    {
      puppies: puppies,
      user: req.user
    });
  });
};

module.exports.renderPuppiesNew = function(req,res){
  var puppies = Puppy.all
  res.render('./puppies/new', {user: req.user, puppies:puppies});
};


module.exports.renderPuppiesCreate = function(req,res,next){
  var puppy = new Puppy({
    name:           req.body.name,
    age:            req.body.age,
    therapy:        req.body.therapy,
    friendliness:   req.body.friendliness,
    hypoallergenic: req.body.hypoallergenic,
    url:            req.body.url,
    size:           req.body.size,
    user:           req.user
  });
  console.log(req.body);
  puppy.save(function(error){
    if(error){res.send('> ' + err);}
    req.user.puppies.push(puppy);
    req.user.save();
    res.redirect('/puppies/' + puppy.id)
  });
};


module.exports.renderPuppiesEdit = function(req,res,next){
  var id = req.params.id;
  var puppy_id = req.params.id;

  Puppy.findById({_id:id}, function(error, puppy){
    console.log('puppy', puppy);
    if(error) res.send(error);
    res.render(
      './puppies/edit', {
        puppy: puppy,
        user: req.user
      });
  })
};




module.exports.renderPuppiesUpdate = function(req,res,next){
  var id = req.params.id;

  Puppy.findById({_id: id}, function(error, puppy){
    if(error) res.send(error);
    if (req.body.name) puppy.name = req.body.name;
    if (req.body.age) puppy.age = req.body.age;
    if (req.body.therapy) puppy.therapy= req.body.therapy;
    if (req.body.friendliness) puppy.friendliness = req.body.friendliness;
    if (req.body.hypoallergenic) puppy.hypoallergenic = req.body.hypoallergenic;
    if (req.body.url) puppy.url = req.body.url;
    if (req.body.size) puppy.size = req.body.size;
    if (req.body.user) puppy.user = req.body.user;

    puppy.save(function(error){
      if(error) res.send(error);
      res.redirect('/puppies/' + id);
    });
  });
};

module.exports.renderPuppiesShow = function(req,res,next){
  var id = req.params.id;

  Puppy.findById({_id:id}, function(error, puppy){
    console.log('puppy', puppy);
    if(error) res.send(error);
    res.render(
      './puppies/show', {
        puppy: puppy,
        user: req.user
      });
  });
};

module.exports.deletePuppy = function(req, res) {
  var id = req.params.id;
  var puppy_id = req.params.id;

  Puppy.findByIdAndRemove({_id: id}, function(error){
    if (error) res.send(error);
    res.redirect('/puppies')
  });
};

