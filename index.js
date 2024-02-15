function getCat() {
    fetch("http://placekitten.com/200/300")
        .then((resp) => resp.json())
        .then((json) => {
            return json;
        })
        .catch((error) => {
            console.error("Error fetching cat:", error);
            throw error;
        });
};