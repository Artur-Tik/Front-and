const NAME = "admin@admin";
const PASSWORD = "admin";
const nameField = document.querySelector(".name-field");
const passwordField = document.querySelector(".password-field");
const nameFieldErrorBlock = document.querySelector(".name-field-error");
const passwordFieldErrorBlock = document.querySelector(".password-field-error");

function showPassword() {
  if(passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = 'password'
  }
}

function logIn() {
    console.log(nameField, passwordField);
    const userName = nameField.value;
    const userPassword = passwordField.value;

    if(userName === NAME) {
        if(userPassword === PASSWORD) {
            alert("Welcome");
        } else {
            passwordField.style.border = "1px solid red";
            passwordFieldErrorBlock.textContent = "Password is wrong";
        }
    } else {
       nameField.style.border = "1px solid red";
       nameFieldErrorBlock.textContent = "Name is wrong";
    }
}

function clearNameError() {
    nameField.style.border = "1px solid #c9c9c9";
    nameFieldErrorBlock.textContent = "";

}

function clearPasswordError() {
    passwordField.style.border = "1px solid #c9c9c9";
    passwordFieldErrorBlock.textContent = "";
}