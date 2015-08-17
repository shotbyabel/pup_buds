var mongoose = require('mongoose');
var User = require('./User');
var Puppy = require('./Puppy');

var MessageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  message: String,
  read: Boolean
})

module.exports = mongoose.model('Message', MessageSchema);
