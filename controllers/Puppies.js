var express = require('express');
var mongoose = require('mongoose');

//||||||||||||||||||||||||||--
// REQUIRE MODELS
//||||||||||||||||||||||||||--
var Puppy = require('../models/Puppy');
var User = require('../models/User');

var router = express.Router();

module.exports.renderPuppiesIndex = function(req, res, next){
  Puppy.find({}, function(err, puppies, user){
    if (err) res.send('> ' + err);
    res.render('puppies/index',
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
  Puppy.findOne(req.params.id, function(error, puppy){
    if(error) return res.send(error);
    res.render('puppies/edit', {user: req.user});
  });
};



module.exports.renderPuppiesUpdate = function(req,res,next){
  Puppy.update({_id: request.params.id}, {
    name: req.body.name,
    age: req.body.age,
    therapy: req.body.therapy,
    friendliness: req.body.friendliness,
    hypoallergenic: req.body.hypoallergenic,
    size: req.body.size,
    user: req.user
  }, function(error){
    if(error) res.send(error);
    res.redirect('/puppies' + puppy_id);
  });
};

//  module.exports.renderPuppiesUpdate = function(req,res,next){
//   Puppy.update(req.params.id,{
//     name: req.body.name,
//     age: req.body.age,
//     therapy: req.body.therapy,
//     friendliness: req.body.friendliness,
//     hypoallergenic: req.body.hypoallergenic,
//     size: req.body.size
//   }, function(error){
//     if (error) res.send(error);
//     res.redirect('/puppies');
//   });
// };
module.exports.renderPuppiesShow = function(req,res,next){
  Puppy.findOne({_id: req.params.id}, function(error, puppy){
    if(error) return res.send(error);
    res.render('/puppies/show', {
      puppy: puppy,
      user: req.user
     });
  });
};


// module.exports.renderPuppiesShow = function(req,res,next){
//   Puppy.findById(req.params.id, function(err, puppy) {
//     console.log('puppy', puppy);
//     if (err) return res.send(err);
//     res.render('puppies/show', {user: req.user, puppy: puppy});
//   });
// };
