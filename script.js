eventDetector();

function eventHandler(node) {
    switch (node.textContent) {
        case "Home":
            document.body.innerHTML = new docStrucGenerator().home
            eventDetector();
            break;

        case "Anime":
            document.body.innerHTML = new docStrucGenerator().anime
            eventDetector();
            break;

        case "Manga":
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
            eventDetector();
            break;

        case "About_Us":
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
            eventDetector();
            break;

        case "Sign-up":
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
            eventDetector();
            break;
    }
}

function docStrucGenerator() {
    this.home = `
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

    this.anime = `
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
    <main class="animetab">
        <div class="animetabdiv">
            <h1 class="animetab">Anime?</h1>
            <h3 class="animetab">
                Anime is hand-drawn and computer-generated animation
                originating from Japan. Outside of Japan and in English,
                anime refers specifically to animation produced in Japan.
                However, in Japan and in Japanese, anime describes all
                animated works, regardless of style or origin.
            </h3>
        </div>
        <div class="animetabdiv">
            <h1 class="animetab">Where to Watch Anime?</h1>
            <h3 class="animetab">
                There are various Sourses to Watch Anime from, A few are
                listed below.
            </h3>
            <ol class="animetab">
                <li class="animetab">
                    <a href="https://www.crunchyroll.com/" class="animetab" target="_blank"
                        >Crunchyroll</a>
                </li>
                <li class="animetab">
                    <a href="https://ww3.gogoanime2.org/" class="animetab" target="_blank"
                    >Gogo Anime</a>
                </li>
                <li class="animetab">
                    <a href="https://9anime.vc/" class="animetab" target="_blank"
                        >9 Anime</a>
                </li>
                <li class="animetab">
                    <a
                        href="https://animekaizoku.com/category/anime/"
                        class="animetab" target="_blank"
                        >Anime Kaizoku</a>
                </li>
                <li class="animetab">
                    <a href="https://zoro.to/" class="animetab" target="_blank">Zoro</a>
                </li>
            </ol>
        </div>
        <div class="animetabdiv">
            <h1 class="animetab" id="animenews">Anime News</h1>
            <h3 class="animetab">Click on the header to view Anime News.</h3>
        </div>
        <div class="animetabdiv">
            <h1 class="animetab" id="animequots">Anime Quotes</h1>
            <h3 class="animetab">Click on the header to view Anime Quotes.</h3>
        </div>
    </main>
    `;
}

function eventDetector() {
    let navBtns = document.querySelectorAll(".navbtn");
    navBtns.forEach((elem) =>
        elem.addEventListener("click", () => eventHandler(elem))
    );
}
