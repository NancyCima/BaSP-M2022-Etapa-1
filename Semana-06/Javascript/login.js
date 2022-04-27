window.onload = function () {

  /* Email validation */
    var emailInputElement = document.getElementById("email");
    var alertEmail = document.getElementById("alertEmail");
    var alertMessageEmail = document.createTextNode("Invalid email address.");

    emailInputElement.onblur = function () {
      if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInputElement.value)) {
        emailInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
        validation++;
      } else {
        emailInputElement.style = "border: solid 2px red; border-radius: 5px";
        alertEmail.appendChild(alertMessageEmail)
        alert("Invalid email address. Please try again.")
      }
    }

    emailInputElement.onfocus = function () {
        emailInputElement.style = "border-color: none";
        alertEmail.removeChild(alertMessageEmail);
    }

  /* Password validation */
    var passwordInputElement = document.getElementById("pass");
    var alertPassword = document.getElementById("alertPassword");
    var alertMessagePassword = document.createTextNode("The password should consist ofal least 8 numbers and letters.");

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
      if (passwordInputElement.value.length > 8 && numberSum == true && letterSum == true) {
          passwordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
          validation++;
        } else {
          passwordInputElement.style = "border: solid 2px red; border-radius: 5px";
          alert("The password should consist of numbers and letters. Please, insert a valid password.")
          alertPassword.appendChild(alertMessagePassword);
        }
      }

      passwordInputElement.onfocus = function () {
        passwordInputElement.style = "border-color: none";
        alertPassword.removeChild(alertMessagePassword);
      }


    //if ((/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInputElement.value)) && (passwordInputElement.value.length > 8 && numberSum == true && letterSum == true)) {
      //alert("nnn") }//
      
}