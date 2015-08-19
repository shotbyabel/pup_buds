var express = require('express');
var mongoose = require('mongoose');
var Puppy = require('../models/Puppy');
var router = express.Router();

module.exports.renderPuppiesIndex = function(req, res, next){
  Puppy.find({}, function(err, puppies){
    if (err) res.send('> ' + err);
    res.render('puppies/index', {
      puppies: puppies
    });
  });
};

module.exports.renderPuppiesNew = function(req,res){
  res.render('puppies/new');
};


module.exports.renderPuppiesCreate = function(req,res,next){
  var puppy = new Puppy({
    name: req.body.name,
    age: req.body.age,
    therapy: req.body.therapy,
    friendliness: req.body.friendliness,
    hypoallergenic: req.body.hypoallergenic,
    size: req.body.size
  });

  puppy.save(function(error){
    if(error){
      res.send('> ' + err);
      res.redirect('/puppies');
    }
  })
};

// module.exports.renderPuppiesCreate = function(req,res,next){
//   var puppy = new Puppy();
//   puppy.name = req.body.name;
//   puppy.age = req.body.age;
//   puppy.therapy = req.body.therapy;
//   puppy.friendliness = req.body.friendliness;
//   puppy.hypoallergenic = req.body.hypoallergenic;
//   puppy.size = req.body.size;

//   puppy.save(function(error, puppy){
//     if (error) return res.send(error);
//     res.send(puppy);
//   });
// };

module.exports.renderPuppiesEdit = function(req,res,next){
  res.render(
    'puppies/edit');
  Puppy.findById(function(error,puppy) {
    if (err) res.send('>' + err);

    if(req.body.name) puppy.name                     = req.body.name;
    if(req.body.age) puppy.age                       = req.body.age;
    if(req.body.therapy) puppy.therapy               = req.body.therapy;
    if(req.body.friendliness) puppy.friendliness     = req.body.friendliness;
    if(req.body.hypoallergenic) puppy.hypoallergenic = req.body.hypoallergenic;
    if(req.body.size) puppy.size                     = req.body.size;

    puppy.save(function(error){
      if (err) res.send('>' + err);

    });
  })
};

module.exports.renderPuppiesShow = function(req,res,next){
  Puppy.findById(req.params.id, function(err, puppy) {
    res.render('/puppies/show',
      { title: 'Pup Buds',
        show: true,
        puppy: puppy
      }
    );
  });
};
