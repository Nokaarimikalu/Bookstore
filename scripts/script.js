// #region Arrays

let books = [
    {
        name: "Die Geheimnisse des Ozeans",
        author: "Clara Meer",
        likes: 1250,
        liked: true,
        price: `19,99`,
        publishedYear: 2018,
        genre: "Fantasy",
        image: "/Bookstore/assets/img/81DliYtUJqL._SY342_.jpg",
        comments: [
            {
                name: "Leser123",
                comment: "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
            },
            {
                name: "Bookworm84",
                comment: "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
            },
            {
                name: "FantasyFanatic",
                comment: "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
            },
            {
                name: "SciFiGuru",
                comment: "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
            },
            {
                name: "NovelLover",
                comment: "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
            },
        ],
    },
    {
        name: "Der vergessene Pfad",
        author: "Maxmilian Schwarz",
        likes: 980,
        liked: false,
        price: "14,50",
        publishedYear: 2021,
        genre: "Fantasy",
        image: "/Bookstore/assets/img/719sInWrmML._SY522_.jpg",
        comments: [],
    },
    {
        name: "Die Farben des Himmels",
        author: "Laura Blau",
        likes: 1520,
        liked: true,
        price: "22,95",
        publishedYear: 2019,
        genre: "Romantik",
        image: "/Bookstore/assets/img/41c0eGqunkL._SY445_SX342_.jpg",
        comments: [
            {
                name: "LeserPeter",
                comment: "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
            },
            {
                name: "BookLover21",
                comment: "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
            },
            {
                name: "FantasyNerd",
                comment: "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
            },
            {
                name: "SciFiEnthusiast",
                comment: "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
            },
            {
                name: "ReadingAddict",
                comment: "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
            },
        ],
    },
    {
        name: "Das Rätsel der Zeit",
        author: "Alexander Weiss",
        likes: 750,
        liked: false,
        price: "18,00",
        publishedYear: 2020,
        genre: "Science-Fiction",
        image: "/Bookstore/assets/img/141rLQJm8g7L._SY445_SX342_.jpg",
        comments: [
            {
                name: "BuchKenner",
                comment: "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
            },
            {
                name: "LeseWurm",
                comment: "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
            },
        ],
    },
    {
        name: "Der letzte Wächter",
        author: "Sabine Grün",
        likes: 1300,
        liked: true,
        price: `16,75`,
        publishedYear: 2017,
        genre: "Fantasy",
        image: "/Bookstore/assets/img/der letzte.jpg",
        comments: [],
    },
    {
        name: "Im Schatten des Mondes",
        author: "Philipp Silber",
        likes: 890,
        liked: false,
        price: `12,30`,
        publishedYear: 2022,
        genre: "Science-Fiction",
        image: "/Bookstore/assets/img/images.jpeg",
        comments: [
            {
                name: "BücherLiebhaber",
                comment: "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
            },
            {
                name: "Leseratte",
                comment: "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
            },
        ],
    },
    {
        name: "Jenseits der Sterne",
        author: "Oliver Schwarz",
        likes: 1450,
        liked: true,
        price: `21,00`,
        publishedYear: 2015,
        genre: "Science-Fiction",
        image: "/Bookstore/assets/img/Download.jpeg",
        comments: [
            {
                name: "Leser123",
                comment: "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
            },
        ],
    },
    {
        name: "Das verborgene Königreich",
        author: "Elena Gold",
        likes: 920,
        liked: false,
        price: `17,55`,
        publishedYear: 2020,
        genre: "Fantasy",
        image: "/Bookstore/assets/img/Download (1).jpeg",
        comments: [
            {
                name: "Bookworm92",
                comment: "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
            },
        ],
    },
    {
        name: "Liebe in Zeiten des Krieges",
        author: "Emilia Rot",
        likes: 1800,
        liked: true,
        price: `19,99`,
        publishedYear: 2016,
        genre: "Romantik",
        image: "/Bookstore/assets/img/Download (2).jpeg",
        comments: [
            {
                name: "Bibliophile23",
                comment: "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
            },
            {
                name: "StorySeeker",
                comment: "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
            },
            {
                name: "SciFiExplorer",
                comment: "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
            },
        ],
    },
];
// #endregion

function init() {
    renderBookTemplate();
}

function addComments(i) {
    let inputComment = document.getElementById(`input${i + 1}`).value;
    let inputElement = document.getElementById(`input${i + 1}`);
    let commentTemp = document.getElementById(`commentsTemplate${i}`);
    inputElement.value = "";
    commentTemp.innerHTML = "";
    books[i].comments.push({
        name: "User",
        comment: inputComment,
    });
    for (let j = 0; j < books[i].comments.length; j++) {
        commentTemp.innerHTML += commentTemplate(i, j);
    }
}

function renderBookTemplate() {
    const bookTemp = document.getElementById(`hauptbereich`);
    bookTemp.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        bookTemp.innerHTML += bookTemplate(i);
        renderHeartImage(i);

        for (let j = 0; j < books[i].comments.length; j++) {
            let commentTemp = document.getElementById(`commentsTemplate${i}`);
            commentTemp.innerHTML += commentTemplate(i, j);
        }
    }
}

function renderHeartImage(index) {
    if (books[index].liked === true) {
        document.getElementById(`heart${index}`).innerHTML = "";
        let heart = document.getElementById(`heart${index}`);
        heart.innerHTML += `<img onclick="changeHeart(${index})" src="/Bookstore/assets/img/black-heart.png">`;
    } else {
        document.getElementById(`heart${index}`).innerHTML = "";
        let heart = document.getElementById(`heart${index}`);
        heart.innerHTML += `<img onclick="changeHeart(${index})" src="/Bookstore/assets/img/black-heart -inner-transparent.png">`;
    }
}

function changeHeart(i) {
    document.getElementById(`likedNumber${i}`).innerHTML = "";
    if (books[i].liked === true) {
        books[i].liked = false;
        books[i].likes--;
    } else if (books[i].liked === false) {
        books[i].liked = true;
        books[i].likes++;
    }

    document.getElementById(`likedNumber${i}`).innerHTML = books[i].likes;
    renderHeartImage(i);
}
