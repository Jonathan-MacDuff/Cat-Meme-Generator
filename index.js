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
            console.error("Error fetching quote:", error);
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
            const niceCatImg = document.createElement("img");
            niceCatImg.src = catData;
            niceCatImg.alt = "Nice Cat";
            niceCatImg.className = "nice-cat";
            niceCatImg.style.width = "400px";
            niceCatImg.style.height = "300px";

            niceCatContainer.appendChild(niceCatImg);

            niceCatContainer.appendChild(lineBreak);

            fetch('http://localhost:3000/getAffirmation')
            .then(response => response.json())
            .then(data => {
                    const niceCatQuote = document.createElement("p");
                    niceCatQuote.textContent = data.affirmation;
                    niceCatContainer.appendChild(niceCatQuote);
                    niceCatContainer.style.width = "400px";
                    niceCatContainer.style.height = "400px";
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

/*function fetchRandomInsult() {
    const apiUrl = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';

    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.insult)
        .catch(error => {
            console.error('Error fetching insult:', error);
            return 'Failed to fetch insult';
        });
}*/

meanCatButton.addEventListener("click", function() {
    getCatImg()
        .then((catData) => {
            console.log("Cat data:", catData);
            const meanCatContainer = document.createElement("div");
            const meanCatImg = document.createElement("img");
            meanCatImg.src = catData;
            meanCatImg.alt = "Mean Cat";
            meanCatImg.className = "mean-cat";
            meanCatImg.style.width = "400px";
            meanCatImg.style.height = "300px";

            meanCatContainer.appendChild(meanCatImg);

            meanCatContainer.appendChild(lineBreak);

        fetch('http://localhost:3000/getInsult')
            .then(response => response.json())
            .then(data => {
                const meanCatContainer = document.createElement('div');
                const meanCatQuote = document.createElement('p');
                meanCatQuote.textContent = data.insult;
                meanCatContainer.appendChild(meanCatQuote);

                const catContainer = document.getElementById('cat-container');
                catContainer.appendChild(meanCatContainer);
            })
            .catch(error => console.error('Error fetching insult:', error));

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
            const badassCatImg = document.createElement("img");
            badassCatImg.src = catData;
            badassCatImg.alt = "Badass Cat";
            badassCatImg.className = "badass-cat";
            badassCatImg.style.width = "400px";
            badassCatImg.style.height = "300px";

            badassCatContainer.appendChild(badassCatImg);

            badassCatContainer.appendChild(lineBreak);

            quoteGrabber("https://api.breakingbadquotes.xyz/v1/quotes")
                .then((badassQuoteArr) => {
                    const badassQuote = badassQuoteArr[0].quote;
                    const badassCatQuote = document.createElement("p");
                    badassCatQuote.textContent = badassQuote;
                    badassCatContainer.appendChild(badassCatQuote);
                    badassCatContainer.style.width = "400px";
                    badassCatContainer.style.height = "400px";
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