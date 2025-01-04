const firstNameInput = document.querySelector(".first-name-input");
const lastNameInput = document.querySelector(".last-name-input");
const numberInput = document.querySelector(".number-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const secondPasswordInput = document.querySelector(".second-password-input");

const registerBtn = document.querySelector(".register-button");

let myName = "kim";
function disappear() {
  if(firstNameInput.value == "" || lastNameInput.value == "" || numberInput.value == "" || emailInput.value == "" || passwordInput.value == "" || secondPasswordInput.value == "") {
    registerBtn.classList.add("hide");
  } else {
    registerBtn.classList.remove("hide");
  }
};

setInterval(() => {
  disappear();
}, 100);