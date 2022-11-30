eventDetector()


function eventHandler(node) {
    switch (node.textContent) {
        case "Home":
            document.body.innerHTML = `
            <header>
                <nav>
                    <img src="assets/logo.png" alt="Logo" />
                    <h2>Weeb Web</h2>
                    <button class="navbtn">Sign-up</button>
                    <button class="navbtn">About_Us</button>
                    <button class="navbtn">Manga</button>
                    <button class="navbtn">Anime</button>
                    <button class="navbtn">Home</button>
                </nav>
            </header>
            <main class="hometab">
                <h1 class="hometab">What is this?</h1>
                <h3 class="hometab">This Site is a Web of Weebs.</h3>

                <h1 class="hometab">Who is a Weeb?</h1>
                <h3 class="hometab">
                    Uncle Google says &nbsp;&nbsp;&nbsp;"A weeb is a derisive term
                    for a non-Japanese person who is so obsessed with Japanese
                    culture that they wish they were actually Japanese.".
                </h3>

                <h1 class="hometab">More Down Blow</h1>
                <h3 class="hometab">
                    On this site you'll find, Where to Watch Anime, Where to Read
                    Manga, Memes(about Anime & Manga), More Weebs like your self,
                    Anime & Manga Discussions, Anime & Manga Suggestions. And Much
                    More. May you have a good time with us. You Can find Anime
                    related content
                    <button class="navbtn hometab"><i>Here</i></button>. Manga
                    related content
                    <button class="navbtn hometab"><i>Here</i></button>.
                </h3>
            </main>
            `;
            eventDetector()
            break;

        case "Anime":
            document.body.innerHTML = `
            <header>
                <nav>
                    <img src="assets/logo.png" alt="Logo" />
                    <h2>Weeb Web</h2>
                    <button class="navbtn">Sign-up</button>
                    <button class="navbtn">About_Us</button>
                    <button class="navbtn">Manga</button>
                    <button class="navbtn">Anime</button>
                    <button class="navbtn">Home</button>
                </nav>
            </header>
            `;
            eventDetector()
            break;
    }
}

function eventDetector() {
    let navBtns = document.querySelectorAll(".navbtn");
    
    navBtns.forEach((elem) =>
        elem.addEventListener("click", () => eventHandler(elem))
    );
}