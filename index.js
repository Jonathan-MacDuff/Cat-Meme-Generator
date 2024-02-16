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

const niceCatButton = document.getElementById("nice-cat-button");
const meanCatButton = document.getElementById("mean-cat-button");
const badassCatButton = document.getElementById("badass-cat-button");

const catContainer = document.getElementById("cat-container");

meanCatButton.addEventListener("click", function() {
    getCatImg()
        .then((catData) => {
            console.log("Cat data:", catData);
            const meanCatImg = document.createElement("img");
            meanCatImg.src = catData;
            meanCatImg.alt = "Mean Cat";
            meanCatImg.className = "mean-cat"

            catContainer.appendChild(meanCatImg);

            const meanCatImages = document.getElementsByClassName("mean-cat")
            Array.from(meanCatImages).forEach((image) => {
                image.addEventListener("mouseover", function() {
                    image.style.border = "2px solid red";
                })
                image.addEventListener("mouseout", function() {
                    image.style.border = ""; 
                })
            })
        })
        .catch((error) => console.error("Error:", error));
});