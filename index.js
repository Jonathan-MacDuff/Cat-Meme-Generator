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
            return json[0];
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

niceCatButton.addEventListener("click", function() {
    getCatImg()
        .then((catData) => {
            console.log("Cat data:", catData);
            const niceCatImg = document.createElement("img");
            niceCatImg.src = catData;
            niceCatImg.alt = "Mean Cat";
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
});

meanCatButton.addEventListener("click", function() {
    getCatImg()
        .then((catData) => {
            console.log("Cat data:", catData);
            const meanCatImg = document.createElement("img");
            meanCatImg.src = catData;
            meanCatImg.alt = "Mean Cat";
            meanCatImg.className = "mean-cat"

            catContainer.appendChild(meanCatImg);

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
            const badassCatImg = document.createElement("img");
            badassCatImg.src = catData;
            badassCatImg.alt = "Mean Cat";
            badassCatImg.className = "badass-cat";

            badassCatContainer.appendChild(badassCatImg);

            badassCatContainer.appendChild(lineBreak);

            quoteGrabber("https://api.breakingbadquotes.xyz/v1/quotes")
                .then((badassQuoteObj) => {
                    const badassQuote = badassQuoteObj.quote;
                    const badassCatQuote = document.createElement("p");
                    badassCatQuote.textContent = badassQuote;
                    badassCatContainer.appendChild(badassCatQuote);
                })
                .catch((error) => console.error("Error fetching quote:", error));

            catContainer.appendChild(badassCatContainer);

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