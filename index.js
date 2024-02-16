function getCat() {
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

const niceCatButton = document.getElementById("nice-cat-button");
const meanCatButton = document.getElementById("mean-cat-button");
const badassCatButton = document.getElementById("badass-cat-button");

const catContainer = document.getElementById("cat-container");

meanCatButton.addEventListener("click", function() {
    getCat()
        .then((catData) => {
            console.log("Cat data:", catData);
            const meanCatImg = document.createElement("img");
            meanCatImg.src = catData;
            meanCatImg.alt = "Mean Cat";

            catContainer.appendChild(meanCatImg);
        })
        .catch((error) => console.error("Error:", error));
});