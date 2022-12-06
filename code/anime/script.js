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

function nodeGen() {
    this.listHeader = function (name, eps) {
        item = document.createElement("button");
        item.innerHTML = `
        <h1>${name},</h1>
        <h2>${eps} Episodes.</h2>
        `;
        return item;
    };

    this.animeCard = function (name, eps, img, disc) {
        let container = document.createElement("div");
        container.id = "contextCard";
        container.innerHTML = `
        <div id="head">
            <h1>Anime Details</h1>
            <button onclick="this.parentElement.parentElement.remove()">X</button>
        </div>
        <div id="body">
            <img src="${img}">
            <h1>${name}</h1>
            <h2>Episodes: ${eps}</h2>
            <h3>Discription: </h3>
            <p>${disc}</p>
        </div>
        `;
        document.body.appendChild(container);
    };
}

async function popularAnimes() {
    try {
        const parentNode = document.querySelector("#animelist h3");
        const data = await (await fetch("/assets/data/animes.json")).json();

        data.forEach((elem) => {
            let dataNode = new nodeGen().listHeader(
                elem["name"],
                elem["episode"]
            );
            parentNode.appendChild(dataNode);
        });
    } catch (error) {
        parentNode.textContent =
            "We are having an issue right now, Please come back later.";
    }
}

async function animeDetails(node) {
    const database = await (await fetch("/assets/data/animes.json")).json();
    const anime = node.children[0].textContent.replace(",", "");
    const data = database.find((elem) => elem["name"] == anime);
    new nodeGen().animeCard(
        data.name,
        data.episode,
        data.img,
        data.description
    );
}

async function quotes() {
    const container = document.querySelector("#quotes h3");
    const qot = await (
        await fetch("https://animechan.vercel.app/api/random")
    ).json();
    container.textContent = `"${qot["quote"]}", ~~${qot["character"]}~~ from ${qot["anime"]}`;
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

document.querySelector("#quotes button").addEventListener("click", quotes);

popularAnimes().then(() => {
    document.querySelectorAll("#animelist h3 button").forEach((elem) => {
        elem.addEventListener("click", () => animeDetails(elem));
    });
});
