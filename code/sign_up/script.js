function pageLoader(node) {
    switch (node.textContent) {
        case "Home":
            open("/code/home/index.html", "_self");
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

document.querySelectorAll(".navbtns").forEach((elem) => {
    elem.addEventListener("click", () => {
        pageLoader(elem);
    });
});

document.getElementById("sidebarbtn").addEventListener("click", () => {
    let navbar = document.getElementById("sidebar");

    if (navbar.style.right == 0 || navbar.style.right == "-15rem") {
        navbar.style = `right: 0rem`;
        return;
    }

    navbar.style.right = "-15rem";
});
