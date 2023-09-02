"use strict";

// DOM Selections
const elem_modelToggler = document.getElementById("auth-model-toggler");
const elem_model = document.getElementById("authentication-model");
const elem_blurScreen = document.getElementById("blur-screen");
const elem_LoginBtn = document.getElementById("state-login");
const elem_SignupBtn = document.getElementById("state-signup");
const elem_username = document.getElementById("username");
const elem_password = document.getElementById("password");
const elem_submitBtn = document.getElementById("submit-btn");

// Functions
const ToggleModel = function () {
    elem_blurScreen.classList.toggle("hidden");
    elem_model.classList.toggle("hidden");
};

(function () {
    const User = JSON.parse(localStorage.getItem("User"));

    try {
        if (User.logedIn !== true) return;
    } catch (error) {
        console.error("User Not Found.");
        return;
    }

    elem_modelToggler.textContent = User.username;
    elem_modelToggler.disabled = true;
})();

const user_login = function () {
    const User = JSON.parse(localStorage.getItem("User"));
    const username = elem_username.value;
    const password = elem_password.value;

    if (localStorage.length === 0) {
        alert("You don't have an account here, first create one.");

        return;
    }

    if (username !== User.username || password !== User.password) {
        alert("Invalid Username or Password");
        elem_username.value = "";
        elem_password.value = "";

        return;
    }

    elem_username.value = "";
    elem_password.value = "";

    elem_modelToggler.textContent = User.username;
    elem_modelToggler.disabled = true;

    User["logedIn"] = true;

    localStorage.setItem("User", JSON.stringify(User));

    ToggleModel();
};

const user_signup = function () {
    const username = elem_username.value;
    const password = elem_password.value;

    if (localStorage.length !== 0) {
        alert("You already hae an account here try to login to that account.");

        return;
    }

    if (username.length < 4 || password.length < 8) {
        alert(
            "Username should be atleast 4 characters long. \n Password should be atleast 8 characters long"
        );
        elem_username.value = "";
        elem_password.value = "";

        return;
    }

    localStorage.setItem(
        "User",
        JSON.stringify({ username: username, password: password })
    );
    elem_username.value = "";
    elem_password.value = "";
    ToggleModel();
};

// Event Listeners
elem_modelToggler.addEventListener("click", ToggleModel);
elem_blurScreen.addEventListener("click", ToggleModel);
elem_LoginBtn.addEventListener("click", () => {
    elem_LoginBtn.classList.add("focus-state");
    elem_SignupBtn.classList.remove("focus-state");

    elem_username.value = "";
    elem_password.value = "";

    elem_submitBtn.textContent = "Login";
});
elem_SignupBtn.addEventListener("click", () => {
    elem_SignupBtn.classList.add("focus-state");
    elem_LoginBtn.classList.remove("focus-state");

    elem_username.value = "";
    elem_password.value = "";

    elem_submitBtn.textContent = "Sign Up";
});
elem_submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const model_state = event.target.textContent;

    model_state === "Login" ? user_login() : user_signup();
});
