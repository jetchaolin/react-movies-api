const favoriteArray = [];

window.addEventListener("DOMContentLoaded", () => {
    const dados = localStorage.getItem("Favoritos");

    if (dados) {
        favoriteArray.push(...JSON.parse(dados));
    }
});

function saveFavorite() {
    localStorage.setItem("Favoritos", JSON.stringify(favoriteArray));
}

function addToFavorite(movie) {
    let movieId = movie.id;

    if (movieId && !favoriteArray.includes(movieId)) {
        favoriteArray.push(movieId);
        console.log("Movie added to favorites:", movie.title);
    }

    saveFavorite();
}

function removeFromFavorite(movie) {
    let movieId = movie.id;

    if (movieId && favoriteArray.includes(movieId)) {
        const index = favoriteArray.indexOf(movieId);
        if (index > -1) {
            favoriteArray.splice(index, 1);
            console.log("Movie removed from favorites:", movie.title);
        }
    }
}

function toggleFavorite(movie) {
    let movieId = movie.id;

    if (movieId) {
        if (favoriteArray.includes(movieId)) {
            removeFromFavorite(movie);
        } else {
            addToFavorite(movie);
        }
    }

    saveFavorite();
}

export { addToFavorite, removeFromFavorite, toggleFavorite, favoriteArray };
