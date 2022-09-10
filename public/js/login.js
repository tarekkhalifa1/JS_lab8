let newDiv = document.createElement("div");
newDiv.classList.add('container')
function validate() {
    var errors = [];
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;

    if (emailInput.length == 0 || passwordInput.length == 0) {
        errors.push('emptyFields');
        emptyFields();

    } // check if user doesn't enter any values

    console.log(errors);

    if (errors.length == 0) {
        if (!emailRegex.test(emailInput)) {
            failedEmail(); // if validation email failed
            errors.push('errorEmail');
        }


    } // check if user enter invalid email

    if (errors.length == 0) {
        if (!passwordRegex.test(passwordInput)) {
            errors.push('errorPassword');
            failedLogin(); // if validation failed
        }

    } // check if user enter valid password or not



    if (errors.length == 0) {
        alert("Logged Successfully!");
        return document.forms[0].submit(); // submit form

    } else {
        return document.body.appendChild(newDiv); 
    } // show errors message

} // end of validate function




function emptyFields() {
    newDiv.classList.remove('success');
    newDiv.classList.add('failed');
    return newDiv.innerHTML = "Please Enter your email and password";

} // end of function empty fields 

function successLogin() {
    newDiv.classList.remove('failed');
    newDiv.classList.add('success');
    return newDiv.innerHTML = 'Logged in Successfully, Welcome!';

} // end of function success message 


function failedEmail() {
    newDiv.classList.remove('success');
    newDiv.classList.add('failed');
    return newDiv.innerHTML = "Please enter valid email";

} // end of function failed email 

function failedLogin() {
    newDiv.classList.remove('success');
    newDiv.classList.add('failed');
    return newDiv.innerHTML = "Password shouldn't be less than 8 characters and should contain small, capital letters and numbers";

} // end of function failed password message


function inpFocus(elm) {
    elm.style.background = "yellow";

} // end of function when user typing input 

function chgDefault(elm) {
    elm.style.background = "white";

} // end of function when user leave input 
