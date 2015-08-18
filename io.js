var io = require('socket.io')();

var chatNamespace = [];

io.on('connection', function (socket) {
  socket.on('register-chat', function(data){
    // if the namespace already exists - set to false initally
    var found = false;
    for (var i = 0; i < chatNamespace.length; i++) {
      if (chatNamespace[i].namespace === data.namespace) {
        found = true;
        break;
      }
      if (!found) {
        var ns = {
          namespace: data.namespace,
          socket: io.of(data.namespace)
        };
        chatNamespace.push(ns);
        ns.socket.on('send-msg', function(data){
          ns.socket.emit('receive-msg', data);
        });
      }
    }
  });
});


module.exports = io;


// if both clients know to chat (listen from connection for anyone)
// loop through length of array of objects
