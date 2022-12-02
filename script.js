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
            document.body.innerHTML = new docStrucGenerator().manga
            eventDetector();
            break;

        case "About_Us":
            document.body.innerHTML = new docStrucGenerator().about
            eventDetector();
            break;

        case "Sign-up":
            document.body.innerHTML = new docStrucGenerator().signup
            eventDetector();
            break;
    }
}

function docStrucGenerator() {
    this.home = `
    <header>
        <nav>
            <img src="assets/imgs/logo.png" alt="Logo" />
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
            <img src="assets/imgs/logo.png" alt="Logo" />
            <h2>Weeb Web</h2>
            <button class="navbtn">Sign-up</button>
            <button class="navbtn">About_Us</button>
            <button class="navbtn">Manga</button>
            <button class="navbtn">Anime</button>
            <button class="navbtn">Home</button>
        </nav>
    </header>
    <main class="animetab">
        <section class="animetab">
            <h1 class="animetab">Anime?</h1>
            <h3 class="animetab">
                Anime is hand-drawn and computer-generated animation
                originating from Japan. Outside of Japan and in English,
                anime refers specifically to animation produced in Japan.
                However, in Japan and in Japanese, anime describes all
                animated works, regardless of style or origin.
            </h3>
        </section>
        <section class="animetab">
            <h1 class="animetab">Where to Watch Anime?</h1>
            <h3 class="animetab">
                There are various Sourses to Watch Anime from, A few are
                listed below.
            </h3>
            <ol class="animetab">
                <li class="animetab">
                    <a href="https://www.crunchyroll.com/" class="animetab" target="_blank">Crunchyroll</a>
                </li>
                <li class="animetab">
                    <a href="https://ww3.gogoanime2.org/" class="animetab" target="_blank">Gogo Anime</a>
                </li>
                <li class="animetab">
                    <a href="https://9anime.vc/" class="animetab" target="_blank">9 Anime</a>
                </li>
                <li class="animetab">
                    <a href="https://animekaizoku.com/category/anime/" class="animetab" target="_blank">Anime
                        Kaizoku</a>
                </li>
                <li class="animetab">
                    <a href="https://zoro.to/" class="animetab" target="_blank">Zoro</a>
                </li>
            </ol>
        </section>
        <section class="animetab">
            <h1 class="animetab" id="animequots">Anime Quotes</h1>
            <h3 class="animetab">
                Click on the header to view Anime Quotes.
            </h3>
        </section>
        <section class="animetab">
            <h1 class="animetab" id="animenews">Popular Animes.</h1>
            <h3 class="animetab">
                Click on the header to view Animes List.
            </h3>
        </section>
    </main>
    `;

    this.manga = `
    <header>
        <nav>
            <img src="assets/imgs/logo.png" alt="Logo" />
            <h2>Weeb Web</h2>
            <button class="navbtn">Sign-up</button>
            <button class="navbtn">About_Us</button>
            <button class="navbtn">Manga</button>
            <button class="navbtn">Anime</button>
            <button class="navbtn">Home</button>
        </nav>
    </header>
    <main class="mangatab">
        <section class="mangatab">
            <h1 class="mangatab">Manga?</h1>
            <h3 class="mangatab">
                Manga are comics or graphic novels originating from Japan. Most manga conform to a style developed in Japan in the late 19th century, and the form has a long prehistory in earlier Japanese art. The term manga is used in Japan to refer to both comics and cartooning.
            </h3>
        </section>
        <section class="mangatab">
            <h1 class="mangatab">Where to Read Manga?</h1>
            <h3 class="mangatab">
                There are various Sourses to Read Manga from, But one of the 
                most trusted one is <a href="https://mangareader.to/home/" class="mangatab">Manga_Reader</a>
            </h3>
        </section>
        <section class="mangatab">
            <h1 class="mangatab" id="manganews">Popular Mangas.</h1>
            <h3 class="mangatab">
                Click on the header to view Manga List.
            </h3>
        </section>
    </main>
    
    `;

    this.about = `
    <header>
        <nav>
            <img src="assets/imgs/logo.png" alt="Logo" />
            <h2>Weeb Web</h2>
            <button class="navbtn">Sign-up</button>
            <button class="navbtn">About_Us</button>
            <button class="navbtn">Manga</button>
            <button class="navbtn">Anime</button>
            <button class="navbtn">Home</button>
        </nav>
    </header>
    <main class="abouttab">
        <section class="abouttab">
            <img src="/assets/imgs/logo.png" alt="Logo" class="abouttab logo">
            <h1 class="abouttab">Weeb Web</h1>
            <h3 class="abouttab">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam doloribus inventore nisi quia quo facilis iste voluptates in quidem, repudiandae nobis cumque harum eligendi, excepturi, earum iusto magni libero cum repellat veritatis odit. Quaerat voluptas distinctio ipsam. Illo repellat cumque eos officia distinctio temporibus explicabo ab facere repudiandae sapiente numquam quae asperiores provident, iure voluptas doloribus expedita, atque nesciunt assumenda! Voluptatibus facere dolores culpa nobis recusandae quo saepe hic doloribus cum quibusdam. Iusto natus optio veritatis ea non, fugiat maxime praesentium voluptatem nesciunt odit tenetur voluptate repellendus eos aliquid velit mollitia sit atque vel, eaque voluptatibus incidunt? Quis sunt id quia tempora numquam unde repellat nostrum impedit. Aliquam veritatis ut ad sint autem dolorum iure, fugit iste asperiores accusamus illo quos quia ipsa hic, nesciunt tempore quo ea eos accusantium nisi excepturi facere placeat? Sint rerum esse aspernatur laborum temporibus laboriosam, corrupti impedit? Ipsum nostrum rerum fugit expedita dolores facere nisi dolorem odit reprehenderit, cupiditate quibusdam iusto omnis doloremque nemo, ut sunt eaque rem porro corrupti hic adipisci neque maiores placeat. Facere officiis et quam perferendis vel dicta neque soluta exercitationem nemo, sed esse repudiandae molestiae magnam quisquam impedit. Pariatur, tempore? Vero iure maxime suscipit voluptas quas explicabo excepturi, delectus adipisci nemo odit mollitia ducimus iste facilis perferendis rem. Delectus, incidunt autem facilis minima quis consequatur, voluptatibus et voluptatem asperiores ratione deserunt. Placeat ex inventore corrupti dolorem! Ad ipsum delectus eligendi eum libero vitae voluptate iure repudiandae voluptatem molestias labore fugit, in magni. Nisi commodi debitis ratione, beatae, doloremque vero necessitatibus enim obcaecati magni eaque accusantium hic soluta odit optio non minima provident perferendis sunt. In exercitationem, quam dolore repellat itaque assumenda quis velit enim neque beatae asperiores voluptatibus harum, autem aliquid fuga? Est maxime incidunt dolor odit esse voluptatibus quae eaque. Laboriosam sapiente, consequuntur iure aliquam incidunt magni animi?</h3>
        </section>
        <section class="abouttab founder">
            <img src="/assets/imgs/owner.png" alt="" class="abouttab founder">
            
            <h1 class="abouttab founder">Founder</h1>
            
            <div class="abouttab founder">
                <h1 class="abouttab foundername">Z</h1>
                <h1 class="abouttab foundername">A</h1>
                <h1 class="abouttab foundername">I</h1>
                <h1 class="abouttab foundername">N</h1>
                <h1 class="abouttab foundername">-</h1>
                <h1 class="abouttab foundername">U</h1>
                <h1 class="abouttab foundername">L</h1>
                <h1 class="abouttab foundername">-</h1>
                <h1 class="abouttab foundername">A</h1>
                <h1 class="abouttab foundername">B</h1>
                <h1 class="abouttab foundername">D</h1>
                <h1 class="abouttab foundername">I</h1>
                <h1 class="abouttab foundername">N</h1>
            </div>
        </section>
    </main>
    
    `;

    this.signup = `
    <header>
        <nav>
            <img src="assets/imgs/logo.png" alt="Logo" />
            <h2>Weeb Web</h2>
            <button class="navbtn">Sign-up</button>
            <button class="navbtn">About_Us</button>
            <button class="navbtn">Manga</button>
            <button class="navbtn">Anime</button>
            <button class="navbtn">Home</button>
        </nav>
    </header>
    <main class="signup">
        <form action="" method="get" class="signup">
            <div class="signup">
                <label for="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Gmail, etc" />
            </div>
            <div class="signup">
                <label>
                    Gender:
                    <label for="male">Male </label>
                    <input type="radio" name="gender" id="male" />
                    <label for="female">Female </label>
                    <input type="radio" name="gender" id="female" />
                </label>
            </div>
            <div class="signup">
                <label>
                    Name:
                    <input
                        type="text"
                        name="fname"
                        placeholder="First Name" />
                    <input
                        type="text"
                        name="lname"
                        placeholder="Last Name" />
                </label>
            </div>
            <div class="signup main">
                <label for="username">Username: </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    required /> <br>
                <label for="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required />
            </div>
            <div class="signup btndiv">
                <button type="reset" class="signupbtn reset">Fill Again</button>
                <button type="submit" class="signupbtn submit">SignUp</button>
            </div>
        </form>
    </main>
    `;
}

function eventDetector() {
    let navBtns = document.querySelectorAll(".navbtn");
    navBtns.forEach((elem) =>
        elem.addEventListener("click", () => eventHandler(elem))
    );
}