$(document).ready(function() {

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
});

/*creates an alert message when user adds a new puppy*/
document.getElementById('puppy-edit').onclick = function(){
  swal("Good job!", "You added a new puppy!", "success");
};

// facebook login
window.fbAsyncInit = function() {
    FB.init({
      appId      : '149730395363094',
      xfbml      : true,
      version    : 'v2.4'
    });
  };

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


// check if the username input is less than 5 characters
var elMsg = document.getElementById('username').onClick = function checkUsername(){
  if(this.value.length < 5) {
    elMsg.textContent = swal('Username must be at least 5 characters or more');
  } else {
    elMsg.textContent = '';
   }
};

// drop down menu for the navbar
$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false // Displays dropdown below the button
    }
  );




