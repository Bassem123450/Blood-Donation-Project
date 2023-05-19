function myFunction() {
  var x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunction2() {
  var x = document.getElementById("psw2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
/**************************************/
var password = document.getElementById("psw")
  , confirm_password = document.getElementById("psw2");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    alert("Password Does Not Match. Please Fix Error To Submit")
  } else {
    confirm_password.setCustomValidity('');
  }
}
confirm_password.onchange = validatePassword;

/**************************************/
function NumbersOnly(input) {
  var regex = /[^0-9]/gi;
  input.value = input.value.replace(regex, "");
}

