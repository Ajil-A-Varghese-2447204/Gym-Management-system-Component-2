
  
var countDownDate = new Date("aug 20, 2024 15:37:25").getTime();
 
var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 
function showAlert(){
    alert("Button Clicked")
}
function homepage(){
  window.location.href = "index.html";
}
function loginpage(){
  window.location.href = "loginpage.html";
}
function cpage(){
  window.location.href = "contactus.html";
}
function validateEmail(emailInput) {
  const emailValue = emailInput.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(emailValue);

  if (!isValidEmail) {
    document.getElementById("email-error").innerHTML = "Please enter a valid email address";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }
}
function limitPhoneLength(phoneInput) {
  const phoneValue = phoneInput.value;
  if (phoneValue.length > 10) {
    phoneInput.value = phoneValue.slice(0, 10);
  }
}

function validatePassword(password) {
  var passwordValue = password.value;
  var passwordError = document.getElementById("password-error");

  if (passwordValue.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long.";
    return false;
  }

  if (!/[a-z]/.test(passwordValue)) {
    passwordError.textContent = "Password must contain at least one lowercase letter.";
    return false;
  }

  if (!/[A-Z]/.test(passwordValue)) {
    passwordError.textContent = "Password must contain at least one uppercase letter.";
    return false;
  }

  if (!/[0-9]/.test(passwordValue)) {
    passwordError.textContent = "Password must contain at least one number.";
    return false;
  }

  if (!/[!@#$%^&*()_+={};':"|,.<>?]/.test(passwordValue)) {
    passwordError.textContent = "Password must contain at least one special character.";
    return false;
  }

  passwordError.textContent = "";
  return true;
}