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
}

const niceCatButton = document.getElementById("nice-cat-button");
const meanCatButton = document.getElementById("mean-cat-button");
const badassCatButton = document.getElementById("badass-cat-button");

const lineBreak = document.createElement("br");

const catContainer = document.getElementById("cat-container");

/*niceCatButton.addEventListener("click", function() {
    getCatImg()
        .then((catData) => {
            console.log("Cat data:", catData);
            const niceCatImg = document.createElement("img");
            niceCatImg.src = catData;
            niceCatImg.alt = "Nice Cat";
            niceCatImg.className = "nice-cat"

            catContainer.appendChild(niceCatImg);

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
});*/

niceCatButton.addEventListener("click", function() {
    getCatImg()
        .then((catData) => {
            console.log("Cat data:", catData);
            const niceCatContainer = document.createElement("div");
            niceCatContainer.className = "single-cat-container";
            const niceCatImg = document.createElement("img");
            niceCatImg.src = catData;
            niceCatImg.alt = "Nice Cat";
            niceCatImg.classList.add("nice-cat", "cat-img");

            niceCatContainer.appendChild(niceCatImg);

            niceCatContainer.appendChild(lineBreak);

            quoteGrabber("https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/")
                .then((niceQuoteObj) => {
                    const niceQuote = niceQuoteObj.affirmation;
                    const niceCatQuote = document.createElement("p");
                    niceCatQuote.textContent = niceQuote;
                    niceCatContainer.appendChild(niceCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            catContainer.appendChild(niceCatContainer);
            catContainer.appendChild(lineBreak);

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
            console.log("Cat data:", catData);
            const meanCatContainer = document.createElement("div");
            meanCatContainer.className = "single-cat-container";
            const meanCatImg = document.createElement("img");
            meanCatImg.src = catData;
            meanCatImg.alt = "Mean Cat";
            meanCatImg.classList.add("mean-cat", "cat-img");

            meanCatContainer.appendChild(meanCatImg);

            meanCatContainer.appendChild(lineBreak);

            quoteGrabber("https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json")
                .then((meanQuoteObj) => {
                    const meanQuote = meanQuoteObj.insult;
                    const meanCatQuote = document.createElement("p");
                    meanCatQuote.textContent = meanQuote;
                    meanCatContainer.appendChild(meanCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            catContainer.appendChild(meanCatContainer);
            catContainer.appendChild(lineBreak);

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
            console.log("Cat data:", catData);
            const badassCatContainer = document.createElement("div");
            badassCatContainer.className = "single-cat-container";
            const badassCatImg = document.createElement("img");
            badassCatImg.src = catData;
            badassCatImg.alt = "Badass Cat";
            badassCatImg.classList.add("badass-cat", "cat-img");

            badassCatContainer.appendChild(badassCatImg);

            badassCatContainer.appendChild(lineBreak);

            quoteGrabber("https://api.breakingbadquotes.xyz/v1/quotes")
                .then((badassQuoteArr) => {
                    const badassQuote = badassQuoteArr[0].quote;
                    const badassCatQuote = document.createElement("p");
                    badassCatQuote.textContent = badassQuote;
                    badassCatContainer.appendChild(badassCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            catContainer.appendChild(badassCatContainer);
            catContainer.appendChild(lineBreak);

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