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

function quoteGrabber(apiLink) {
    return fetch(`${apiLink}`)
        .then((resp) => resp.json())
        .then((json) => {
            return json;
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

const niceCatButton = document.getElementById("nice-cat-button");
const meanCatButton = document.getElementById("mean-cat-button");
const badassCatButton = document.getElementById("badass-cat-button");
const catContainer = document.getElementById("cat-container");

niceCatButton.addEventListener("click", function() {
    getCatImg()
        .then((catData) => {
            const niceCatContainer = catDivMaker(catData);
            niceCatContainer.classList.add("nice-cat");

            quoteGrabber("https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/")
                .then((niceQuoteObj) => {
                    const niceQuote = niceQuoteObj.affirmation;
                    const niceCatQuote = document.createElement("p");
                    niceCatQuote.textContent = niceQuote;
                    niceCatQuote.className = "cat-quote";
                    niceCatContainer.appendChild(niceCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            catContainer.appendChild(niceCatContainer);
            catContainer.appendChild(document.createElement("br"));

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
            const meanCatContainer = catDivMaker(catData);
            meanCatContainer.classList.add("mean-cat");

            quoteGrabber("https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json")
                .then((meanQuoteObj) => {
                    const meanQuote = meanQuoteObj.insult;
                    const meanCatQuote = document.createElement("p");
                    meanCatQuote.textContent = meanQuote;
                    meanCatQuote.className = "cat-quote";
                    meanCatContainer.appendChild(meanCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            catContainer.appendChild(meanCatContainer);
            catContainer.appendChild(document.createElement("br"));

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
            const badassCatContainer = catDivMaker(catData);
            badassCatContainer.classList.add("badass-cat");

            quoteGrabber("https://api.breakingbadquotes.xyz/v1/quotes")
                .then((badassQuoteArr) => {
                    const badassQuote = badassQuoteArr[0].quote;
                    const badassCatQuote = document.createElement("p");
                    badassCatQuote.textContent = badassQuote;
                    badassCatQuote.className = "cat-quote";
                    badassCatContainer.appendChild(badassCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            catContainer.appendChild(badassCatContainer);
            catContainer.appendChild(document.createElement("br"));

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