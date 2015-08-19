var Puppy = require('../models/Puppy');

module.exports.renderPuppiesNew = function(req,res){
  res.render('puppies/new');
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


module.exports.renderPuppiesCreate = function(req,res,next){
  Puppy.create(req.body.puppy, function (err, puppy){
    if (err) res.send('>' + err);

    res.redirect('/puppies' + puppy.id);
  });
};

module.exports.renderPuppiesEdit = function(req,res,next){
  res.render(
    'puppies/edit');
  Puppy.findById(function(error,puppy) {
    if (err) res.send('>' + err);

    if(request.body.name) puppy.name        = request.body.name;
    if(request.body.age) puppy.age          = request.body.age;
    if(request.body.therapy) puppy.therapy  = request.body.therapy;
    if(request.body.friendliness) puppy.friendliness = request.body.friendliness;
    if(request.body.hypoallergenic) puppy.hypoallergenic = request.body.hypoallergenic;
    if(request.body.size) puppy.size = request.body.size;

    puppy.save(function(error){
      if (err) res.send('>' + err);

    });
  })
};
