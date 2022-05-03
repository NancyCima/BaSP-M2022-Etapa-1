window.onload = function () {

    /* Name validation */
    var nameInputElement = document.getElementById("fName");
    var alertName = document.getElementById("alertFName");
    var alertMessageName = document.createTextNode("Insert a valid first name");
    var validationName;

    nameInputElement.onblur = function () {
        var numberSum = false;
        for (var i = 0; i < nameInputElement.value.length; i++) {
            if (isNaN(nameInputElement.value[i]) == false) {
                numberSum = true;
            }
        }
        if (nameInputElement.value.length > 3 && numberSum == false) {
            nameInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationName = true;
        } else {
            nameInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertName.appendChild(alertMessageName);
            validationName = false
            alert("Insert a valid first name")
        }
    }
    nameInputElement.onfocus = function () {
        nameInputElement.style = "border-color: none";
        alertName.removeChild(alertMessageName);
    }

    /* Last name validation */
    var lastNameInputElement = document.getElementById("lName");
    var alertLName = document.getElementById("alertLNname");
    var alertMessageLName = document.createTextNode("Insert a valid last name format.");
    var validationLastName;

    lastNameInputElement.onblur = function () {
        var numberSum = false;
        for (var i = 0; i < lastNameInputElement.value.length; i++) {
            if (isNaN(lastNameInputElement.value[i]) == false) {
                numberSum = true;
            }
        }
        if (lastNameInputElement.value.length > 3 && numberSum == false) {
            lastNameInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationLastName = true;
        } else {
            lastNameInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertLName.appendChild(alertMessageLName);
            validationLastName = false;
            alert("Insert a valid last name");
        }
    }
    lastNameInputElement.onfocus = function () {
        lastNameInputElement.style = "border-color: none";
        alertLName.removeChild(alertMessageLName)
    }

    /* DNI validation */
    var dniInputElement = document.getElementById("dni");
    var alertDNI = document.getElementById("alertDNI");
    var alertMessageDNI = document.createTextNode("Insert a valid DNI format.")
    var validationDNI;

    dniInputElement.onblur = function () {
        if (dniInputElement.value.length > 7 && isNaN(dniInputElement.value) == false) {
            dniInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationDNI = true;
        } else {
            dniInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertDNI.appendChild(alertMessageDNI);
            validationDNI = false
            alert("Insert a valid DNI")
        }
    }
    dniInputElement.onfocus = function () {
        dniInputElement.style = "border-color: none";
        alertDNI.removeChild(alertMessageDNI);
    }

    /* Date validation */
    var dateInputElement = document.getElementById("date");
    var alertDate = document.getElementById("alertDate");
    var alertMessageDate = document.createTextNode("Insert a valid date format");
    var validationDate;

    dateInputElement.onblur = function () {
        var date = dateInputElement.value.replace(/[/]/g, '');
        var slash = 0;
        for (var i = 0; i < dateInputElement.value.length; i++) {
            if (dateInputElement.value[i] == '/') {
                slash++;
            }
        }
        if (slash == 2 && isNaN(date) == false) {
            dateInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationDate = true;
        } else {
            dateInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertDate.appendChild(alertMessageDate);
            alert("Insert a valid date. It shouls be written in the form dd/mm/yyyy")
            validationDate = false;
        }
    }

    dateInputElement.onfocus = function () {
        dateInputElement.style = "border-color: none";
        alertDate.removeChild(alertMessageDate);
    }

    /* Phone number validation */
    var phoneNumberInputElement = document.getElementById("phoneNumber");
    var alertPhone = document.getElementById("alertPhone");
    var alertMessagePhone = document.createTextNode("Insert a valid phone number")
    var validationPhone;

    phoneNumberInputElement.onblur = function () {
        if (phoneNumberInputElement.value.length == 10 && isNaN(phoneNumberInputElement.value) == false) {
            phoneNumberInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationPhone = true;
        } else {
            phoneNumberInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertPhone.appendChild(alertMessagePhone);
            validationPhone = false;
            alert("Insert a valid phone number. It should consist of 10 numbers");
        }
    }
    phoneNumberInputElement.onfocus = function () {
        phoneNumberInputElement.style = "border-color: none";
        alertPhone.removeChild(alertMessagePhone);
    }

    /* Address validation */
    var addressInputElement = document.getElementById("address");
    var alertAddress = document.getElementById("alertAddress");
    var alertMessageAddress = document.createTextNode("Insert a valid address format.");
    var validationAddress;

    addressInputElement.onblur = function () {
        var addressSpaces = addressInputElement.value.replaceAll(' ', '');
        var number = false;
        for (var i = 0; i < addressSpaces.length; i++) {
            if (isNaN(addressSpaces[i]) == false) {
                number = true;
            }
        }
        var letter = false;
        for (var i = 0; i < addressSpaces.length; i++) {
            if (isNaN(addressSpaces[i]) == true) {
                letter = true;
            }
        }
        if (addressInputElement.value.length > 5 && number == true && letter == true &&
            addressInputElement.value.indexOf(' ') > 0 &&
            addressInputElement.value.indexOf(' ') < addressInputElement.value.length - 1 &&
            addressInputElement.value.length > addressInputElement.value.lastIndexOf(' ')) {
            addressInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationAddress = true;
        } else {
            addressInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertAddress.appendChild(alertMessageAddress);
            validationAddress = false;
            alert("Insert a valid address. It should have of numbers and letters");
        }
    }
    addressInputElement.onfocus = function () {
        addressInputElement.style = "border-color: none";
        alertAddress.removeChild(alertMessageAddress);
    }

    /* Location validation */
    var locationInputElement = document.getElementById("city");
    var alertLocation = document.getElementById("alertCity");
    var alertMessageLocation = document.createTextNode("Insert a valid city name.")
    var validationLocation;

    locationInputElement.onblur = function () {
        if (locationInputElement.value.length > 3) {
            locationInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationLocation = true;
        } else {
            locationInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertLocation.appendChild(alertMessageLocation);
            validationLocation = false;
            alert("Insert a real city name");
        }
    }
    locationInputElement.onfocus = function () {
        locationInputElement.style = "border-color: none";
        alertLocation.removeChild(alertMessageLocation);
    }

    /* Postal code validation */
    var postalCodeInputElement = document.getElementById("pCode");
    var alertCode = document.getElementById("alertPCode");
    var alertMessageCode = document.createTextNode("Insert a valid postal code format.")
    var validationCode;

    postalCodeInputElement.onblur = function () {
        if (postalCodeInputElement.value.length >= 4 && postalCodeInputElement.value.length <= 5 && isNaN(postalCodeInputElement.value) == false) {
            postalCodeInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationCode = true;
        } else {
            postalCodeInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertCode.appendChild(alertMessageCode);
            validationCode = false;
            alert("Insert a valid postal code. It should have 4 to 5 numbers");
        }
    }
    postalCodeInputElement.onfocus = function () {
        postalCodeInputElement.style = "border-color: none";
        alertCode.removeChild(alertMessageCode)
    }

    /* Email validation */
    var emailInputElement = document.getElementById("email");
    var alertEmail = document.getElementById("alertEmail");
    var alertMessageEmail = document.createTextNode("Insert a valid email format.");
    var validationEmail;

    emailInputElement.onblur = function () {
        if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(emailInputElement.value)) {
            emailInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationEmail = true;
        } else {
            emailInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertEmail.appendChild(alertMessageEmail);
            validationEmail = false;
            alert("Insert a valid email address");
        }
    }
    emailInputElement.onfocus = function () {
        emailInputElement.style = "border-color: none";
        alertEmail.removeChild(alertMessageEmail);
    }


    /* Password validation */
    var passwordInputElement = document.getElementById("pass");
    var alertPassword = document.getElementById("alertPass");
    var alertMessagePassword = document.createTextNode("Insert a valid password format.");
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
        if (password.value.length >= 8 && numberSum == true && letterSum == true) {
            password.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationPassword = true;
        } else {
            password.style = "border: solid 2px red; border-radius: 5px";
            alertPassword.appendChild(alertMessagePassword);
            validationPassword = false
            alert("Insert a valid password. It should have at least 8 characters, including letters and numbers");
        }
    }
    passwordInputElement.onfocus = function () {
        passwordInputElement.style = "border-color: none";
        alertPassword.removeChild(alertMessagePassword);
    }

    /* Repeat password validation */
    var repPasswordInputElement = document.getElementById("passRepetition");
    var alertRepPassword = document.getElementById("alertPassRepetition");
    var alertMessageRepPassword = document.createTextNode("Insert a valid password.");
    var validationRepPassword;

    repPasswordInputElement.onblur = function () {
        if (passwordInputElement.value == repPasswordInputElement.value) {
            repPasswordInputElement.style = "border: solid 2px  #48e525; border-radius: 5px";
            validationRepPassword = true;
        } else {
            repPasswordInputElement.style = "border: solid 2px red; border-radius: 5px";
            alertRepPassword.appendChild(alertMessageRepPassword);
            validationRepPassword = false;
            alert("The passwords are not the same. Please, try again.");
        }
    }
    repPasswordInputElement.onfocus = function () {
        repPasswordInputElement.style = "border-color: none";
        alertRepPassword.removeChild(alertMessageRepPassword);
    }


    /* Submit event */
    var submitSignup = document.getElementById("sign-upSubmit");
    var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup";

    function myStorage() {
        localStorage.setItem("name", nameInputElement.value);
        localStorage.setItem("lastName", lastNameInputElement.value);
        localStorage.setItem("dni", dniInputElement.value);
        localStorage.setItem("dob", dateInputElement.value);
        localStorage.setItem("phone", phoneNumberInputElement.value);
        localStorage.setItem("address", addressInputElement.value);
        localStorage.setItem("city", locationInputElement.value);
        localStorage.setItem("zip", postalCodeInputElement.value);
        localStorage.setItem("email", emailInputElement.value);
        localStorage.setItem("password", passwordInputElement.value);
    }

    function infoSubmit() {
        if (validationName === true &&
            validationLastName === true &&
            validationDNI === true &&
            validationDate === true &&
            validationAddress === true &&
            validationLocation === true &&
            validationPhone === true &&
            validationCode === true &&
            validationEmail === true &&
            validationPassword === true) {
            fetch(url +
                "?name=" + nameInputElement.value +
                "&lastName=" + lastNameInputElement.value +
                "&dni=" + dniInputElement.value +
                "&dob=" + dateInputElement.value +
                "&phone=" + phoneNumberInputElement.value +
                "&address=" + addressInputElement.value +
                "&city=" + locationInputElement.value +
                "&zip=" + postalCodeInputElement.value +
                "&email=" + emailInputElement.value +
                "&password=" + passwordInputElement.value)
                .then(function (response) {
                    return response.json();
                })
                .then(function (res) {
                    if (res.succes) {
                        myStorage();
                        alert("Name: " + nameInputElement.value +
                            "Last Name: " + lastNameInputElement.value +
                            "DNI: " + dniInputElement.value +
                            "DoB: " + dateInputElement.value +
                            "Phone: " + phoneNumberInputElement.value +
                            "&Address: " + addressInputElement.value +
                            "City: " + locationInputElement.value +
                            "Zip: " + postalCodeInputElement.value +
                            "Email: " + emailInputElement.value +
                            "Password: " + passwordInputElement.value);
                    } else {
                        alert(res.msg);
                    }
                })
                .catch(function (err) {
                    alert(err.errors[0].msg);
                });
        } else {
            alert("Error");
        }
    }
    submitSignup.onclick = function (e) {
        e.preventDefault();
        infoSubmit();
    }
}