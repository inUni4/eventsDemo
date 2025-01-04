const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const errorText = document.querySelector(".error-text");
const loginWrapped = document.querySelector(".login-wrapped");

let myName = "kim";
function disappear() {
  if(emailInput.value == "" || passwordInput.value == "") {
    loginWrapped.classList.add("hide");
  } else if(emailInput.value == "luffy5@gmail.com" && passwordInput.value == "pirateking5") {
    loginWrapped.classList.remove("hide");
    loginWrapped.innerHTML = `<a href="event.html" target="_blank" class="login-wrapper">
                                <button class="login-button">login</button>
                              </a>`;
  };
};

setInterval(() => {
  disappear();
}, 100);
