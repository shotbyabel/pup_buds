var Puppy = require('../models/Puppy');

module.exports.renderPuppiesIndex = function(req, res, next){
  Puppy.find({}, function(err, puppies){
    if (err) res.send('> ' + err);
    res.render('puppies/index', {
      puppies: puppies
    });
  });
}

module.exports.renderPuppiesCreate = function(req,res,next){
  Puppy.create(req.body.puppy, function (err, puppy){
    if (err) res.send('>' + err);

    res.redirect('/puppies' + puppy.id);
  });
};

module.exports.renderPuppiesNew = function(req,res){
  res.render('puppies/new');
};

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
