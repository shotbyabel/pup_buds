var io = require('socket.io')();

io.on('connection', function(socket) {
  console.log('User connected');

  socket.on('disconnect', function(){
    console.log('User disconnected');
  });

  socket.on('register-chat', function(room){
    console.log('message: ' + room);
    socket.join(room);
    console.log(socket);
    socket.room = room;
  });

  socket.on('private-message', function(message) {
    io.to(socket.room).emit('private-message', message);
  });

});


module.exports = io;


// if both clients know to chat (listen from connection for anyone)
// loop through length of array of objects
