function getCatImg() {
    return fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        .then((resp) => resp.json())
        .then((json) => {
            return json[0].url;
        })
        .catch((error) => {
            console.error("Error fetching cat:", error);
            throw error;
        });
};

function catDivMaker(catData) {
    const singleCatContainer = document.createElement("div");
            singleCatContainer.className = "single-cat-container";
            catImg = document.createElement("img");
            catImg.src = catData;
            catImg.classList.add("cat-img");
            singleCatContainer.appendChild(catImg);
            return singleCatContainer;
};

function quoteGrabber(apiLink) {
    const headers = new Headers({
        'Origin': 'https://jonnymanchild.github.io/phase-1-final-project/', });
    return fetch(apiLink, { headers })
        .then((resp) => resp.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error("Error fetching cat:", error);
            throw error;
        });
};

function quoteAdder(catQuote) {
    const singleCatQuote = document.createElement("p");
    singleCatQuote.textContent = catQuote;
    singleCatQuote.className = "cat-quote";
    return singleCatQuote;
};

const niceCatButton = document.getElementById("nice-cat-button");
const meanCatButton = document.getElementById("mean-cat-button");
const badassCatButton = document.getElementById("badass-cat-button");
const allCatsContainer = document.getElementById("cat-container");

niceCatButton.addEventListener("click", function() {
    getCatImg()
        .then((catData) => {
            const catContainer = catDivMaker(catData);
            catContainer.classList.add("nice-cat");

            quoteGrabber("https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/")
                .then((niceQuoteObj) => {
                    const catQuote = niceQuoteObj.affirmation;
                    const singleCatQuote = quoteAdder(catQuote);
                    catContainer.appendChild(singleCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            allCatsContainer.appendChild(catContainer);
            allCatsContainer.appendChild(document.createElement("br"));

            const niceCatImages = document.getElementsByClassName("nice-cat");

            Array.from(niceCatImages).forEach((image) => {
                image.addEventListener("mouseover", function() {
                    image.style.border = "2px solid blue";
                });
                image.addEventListener("mouseout", function() {
                    image.style.border = ""; 
                });
            });
        })
        .catch((error) => console.error("Error:", error));
});

meanCatButton.addEventListener("click", function() {
    getCatImg()
        .then((catData) => {
            const catContainer = catDivMaker(catData);
            catContainer.classList.add("mean-cat");

            quoteGrabber("https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json")
                .then((meanQuoteObj) => {
                    const catQuote = meanQuoteObj.insult;
                    const singleCatQuote = quoteAdder(catQuote);
                    catContainer.appendChild(singleCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            allCatsContainer.appendChild(catContainer);
            allCatsContainer.appendChild(document.createElement("br"));

            const meanCatImages = document.getElementsByClassName("mean-cat");

            Array.from(meanCatImages).forEach((image) => {
                image.addEventListener("mouseover", function() {
                    image.style.border = "2px solid red";
                });
                image.addEventListener("mouseout", function() {
                    image.style.border = ""; 
                });
            });
        })
        .catch((error) => console.error("Error:", error));
});

badassCatButton.addEventListener("click", function() {
    getCatImg()
        .then((catData) => {
            const catContainer = catDivMaker(catData);
            catContainer.classList.add("badass-cat");

            quoteGrabber("https://api.breakingbadquotes.xyz/v1/quotes")
                .then((badassQuoteArr) => {
                    const catQuote = badassQuoteArr[0].quote;
                    const singleCatQuote = quoteAdder(catQuote);
                    catContainer.appendChild(singleCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            allCatsContainer.appendChild(catContainer);
            allCatsContainer.appendChild(document.createElement("br"));

            const badassCatImages = document.getElementsByClassName("badass-cat");

            Array.from(badassCatImages).forEach((image) => {
                image.addEventListener("mouseover", function() {
                    image.style.border = "2px solid green";
                });
                image.addEventListener("mouseout", function() {
                    image.style.border = ""; 
                });
            });
        })
        .catch((error) => console.error("Error:", error));
});