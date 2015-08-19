require('dotenv').load();
var jwt = require('jsonwebtoken');

exports.validateToken = function(request, response, next){
  //checks these three locations for the token body,query,header
  var token = request.body.token || request.query.token || request.headers['x-access-token'];
    if(token){
        jwt.verify(token, process.env.SECRET, function(error, decoded){
          if(error){
            return response.status(403).json({
              success: false,
              message: "You have no token"
            });
          }else{
            //if succesful
            request.decoded = decoded;
            next();
          }
        })

    }else{
      return response.status(403).json({
        success: false,
        message: 'No Token Provided'
      });
    }
};
