document.addEventListener("DOMContentLoaded", function() {

// get our connection to the socket.io server
var socket = io(getNamespaceName());
var mainSocket = io();
console.log(mainSocket);
mainSocket.emit('register-chat', {
  namespace: getNamespaceName()
});

});




function getNamespaceName(){
  if(thisUsername < otherUsername) {
    return "/" + thisUsername + "|" + otherUsername;
  } else {
    return "/" + otherUsername + "|" + thisUsername;
  }
}


// MAKE SURE EMAILS ARE CHANGED TO LOWERCASE!!!!
