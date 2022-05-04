window.onload = function () {


  /* Email validation */
    var emailInputElement = document.getElementById("email");
    var alertEmail = document.getElementById("alertEmail");
    var alertMessageEmail = document.createTextNode("Invalid email address.");
    var validationEmail;

    emailInputElement.onblur = function () {
      if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInputElement.value)) {
        emailInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
        validationEmail = true;
      } else {
        emailInputElement.style = "border: solid 2px red; border-radius: 5px";
        alertEmail.appendChild(alertMessageEmail)
        alert("Invalid email address. Please try again.")
        validationEmail = false;
      }
    }

        emailInputElement.onfocus = function () {
        emailInputElement.style = "border-color: none";
        if (validationEmail == false) {
          alertEmail.removeChild(alertMessageEmail);
        }
    }

  /* Password validation */
    var passwordInputElement = document.getElementById("pass");
    var alertPassword = document.getElementById("alertPassword");
    var alertMessagePassword = document.createTextNode("The password should consist of at least 8 numbers and letters.");
    var validationPassword;

    passwordInputElement.onblur = function () {
      var numberSum = false;
      for (var i = 0; i < passwordInputElement.value.length; i++) {
        if (isNaN(passwordInputElement.value[i]) == false) {
          numberSum = true;
        }
      }
      var letterSum = false;
      for (var i = 0; i < passwordInputElement.value.length; i++) {
        if (isNaN(passwordInputElement.value[i]) == true) {
          letterSum = true;
        }
      }
      if (passwordInputElement.value.length >= 8 && numberSum == true && letterSum == true) {
          passwordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
          validationPassword = true;
        } else {
          passwordInputElement.style = "border: solid 2px red; border-radius: 5px";
          alert("The password should consist of numbers and letters. Please, insert a valid password.")
          alertPassword.appendChild(alertMessagePassword);
          validationPassword = false;
        }
      }

        passwordInputElement.onfocus = function () {
        passwordInputElement.style = "border-color: none";
        if (validationEmail == false) {
          alertPassword.removeChild(alertMessagePassword);
        }
      }

 /* Submit event */
 var loginSubmit = document.getElementById("loginSubmit");
 var url = "https://basp-m2022-api-rest-server.herokuapp.com/login";

 function infoSubmit() {
  if (validationEmail && validationPassword) {
    fetch(url + "?email=" + emailInputElement.value + "&password=" + passwordInputElement.value)
             .then(function (res) {
                 if (res.ok) {
                     alert("Correct Login. Email: " + emailInputElement.value + " Password: " + passwordInputElement.value);
                 } else {
                     alert("Error");
                 }
             })
             .catch(function (err) {
                 alert(err.errors[0].msg);
             });
     } else {
         alert("error");
     }
 }
 loginSubmit.onclick = function (e) {
     e.preventDefault();
     infoSubmit();
 }
}