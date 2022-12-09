function pageLoader(node) {
    switch (node.textContent) {
        case "Home":
            open("/index.html", "_self");
            break;
        case "Anime":
            open("/code/anime/index.html", "_self");
            break;
        case "Manga":
            open("/code/manga/index.html", "_self");
            break;
        case "About-Us":
            open("/code/about/index.html", "_self");
            break;
        case "Sign-up":
            open("/code/sign_up/index.html", "_self");
            break;
    }
}

function toggleToSignup(node) {
    node.style = `
            background-color: rgb(65, 174, 247);
            border: 1px solid black;
            `;
    node.nextElementSibling.style = `
            background-color: rgb(20, 94, 144);
            border: none;
            `;
    new nodeGen().signup();
}

function toggleToLogin(node) {
    node.style = `
    background-color: rgb(65, 174, 247);
    border: 1px solid black;
    `;
    node.previousElementSibling.style = `
    background-color: rgb(20, 94, 144);
    border: none;
    `;
    new nodeGen().login();
}

function signUp() {
    const gUName = document.getElementById("username").value.trim();
    const gPword = document.getElementById("password").value.trim();

    if (gUName == "" || gPword == "") {
        document.getElementById("username").style = `
        border: 2px solid red;
        background-color: yellow;
        `;
        document.getElementById("password").style = `
        border: 2px solid red;
        background-color: yellow;
        `;
        return;
    } else {
        document.getElementById("username").style = `
        border: 1px solid black;
        background-color: rgb(254, 223, 84);
        `;
        document.getElementById("password").style = `
        border: 1px solid black;
        background-color: rgb(254, 223, 84);
        `;
    }
    if (
        localStorage.getItem("username") === null ||
        localStorage.getItem("password") === null
    ) {
        localStorage.setItem("username", gUName);
        localStorage.setItem("password", gPword);

        alert("Account Created Successfully.");

        open("/index.html", "_self");
    } else {
        alert("You already have an account Here.");
        toggleToLogin(document.getElementById("log-in"));
    }
}

function logIn() {
    let gUName = document.getElementById("username").value.trim();
    let gPWord = document.getElementById("password").value.trim();

    if (gUName == "" || gPWord == "") {
        document.getElementById("username").style = `
        border: 2px solid red;
        background-color: yellow;
        `;
        document.getElementById("password").style = `
        border: 2px solid red;
        background-color: yellow;
        `;
        return;
    } else {
        document.getElementById("username").style = `
        border: 1px solid black;
        background-color: rgb(254, 223, 84);
        `;
        document.getElementById("password").style = `
        border: 1px solid black;
        background-color: rgb(254, 223, 84);
        `;
    }
    if (
        localStorage.getItem("username") === null ||
        localStorage.getItem("password") === null
    ) {
        alert("You don't have an account Here, Please first create one.");
        toggleToSignup(document.getElementById("sign-up"));
    } else {
        const sUName = localStorage.getItem("username");
        const sPWord = localStorage.getItem("password");

        if (sUName === gUName && sPWord === gPWord) {
            alert("Log-In Successful.");
            open("/index.html", "_self");
        } else {
            document.getElementById("username").style = `
                border: 2px solid red;
                background-color: yellow;
            `;
            document.getElementById("password").style = `
                border: 2px solid red;
                background-color: yellow;
            `;
            alert('Username or Password Incorrect.')
            document.getElementById("username").value = ''
            document.getElementById("password").value = ''
        }
    }
}

function nodeGen() {
    this.signup = function () {
        document.getElementById("body").lastElementChild.remove();
        document.querySelector("#header h1").textContent = "Sign-up";

        let node = document.createElement("div");
        node.id = "sign";
        node.innerHTML = `
        <section>
            <label for="email">Email: </label>
            <input
                type="email"
                id="email"
                placeholder="example@gmail.com" />
        </section>
        <section>
            <label>
                Gender:
                <label for="male">Male:</label>
                <input type="radio" name="gender" id="male" />
                <label for="female">Female:</label>
                <input type="radio" name="gender" id="female" />
            </label>
        </section>
        <section>
            <label>
                Name: 
                <input
                    type="text"
                    id="firstname"
                    placeholder="Your Name" />
                <input
                    type="text"
                    id="lastname"
                    placeholder="Last Name" />
            </label>
        </section>
        <section>
            <label for="username">Username: </label>
            <input type="text" id="username" placeholder="User1" />
        </section>
        <section>
            <label for="password">Password: </label>
            <input
                type="password"
                id="password"
                placeholder="*********" />
        </section>
        <section>
            <button id="logger">Sign-Up</button>
        </section>
        `;
        document.getElementById("body").appendChild(node);

        document.getElementById("logger").addEventListener("click", () => {
            document.getElementById("logger").textContent == "Sign-Up"
                ? signUp()
                : logIn();
        });
    };

    this.login = function () {
        document.getElementById("body").lastElementChild.remove();
        document.querySelector("#header h1").textContent = "Log-In";

        let node = document.createElement("div");
        node.id = "log";
        node.innerHTML = `
        <section>
            <label for="username">Username: </label>
            <input type="text" id="username" placeholder="User1" />
        </section>
        <section>
            <label for="password">Password: </label>
            <input
                type="password"
                id="password"
                placeholder="*********" />
        </section>
        <section>
            <button id="logger">Log-In</button>
        </section>
        `;
        document.getElementById("body").appendChild(node);

        document.getElementById("logger").addEventListener("click", () => {
            document.getElementById("logger").textContent == "Sign-Up"
                ? signUp()
                : logIn();
        });
    };
}

document.querySelectorAll(".navbtns").forEach((elem) => {
    elem.addEventListener("click", () => {
        pageLoader(elem);
    });
});

document.getElementById("sidebarbtn").addEventListener("click", () => {
    let navbar = document.getElementById("sidebar");

    if (navbar.style.right == 0 || navbar.style.right == "-50rem") {
        navbar.style = `right: 0rem`;
        return;
    }

    navbar.style.right = "-50rem";
});

document.querySelectorAll(".toggle").forEach((elem) => {
    elem.addEventListener("click", () => {
        elem.textContent == "Sign-Up"
            ? toggleToSignup(elem)
            : toggleToLogin(elem);
    });
});

document.getElementById("logger").addEventListener("click", () => {
    document.getElementById("logger").textContent == "Sign-Up"
        ? signUp()
        : logIn();
});
