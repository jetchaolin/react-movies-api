function renderMovieGenre(movie) {
    if (!movie || !movie.genres || movie.genres.length === 0) {
        return "Gênero não disponível";
    }

    return (
        <>
            <p>
                <strong>Genero(s): </strong>
                {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
        </>
    );
}

function renderMovieCast(movie, state = false) {
    if (!movie || !movie.credits.cast || movie.credits.cast.length === 0) {
        return "Elenco não disponível";
    }
    let actors = movie.credits.cast || [];
    let cast = [];
    function actorMap(actors) {
        actors.map((actor) => cast.push(actor.name));
        return cast;
    }

    return (
        <>
            <p>
                <strong>Elenco: </strong>
                {state
                    ? actorMap(actors).join(", ")
                    : actors.length >= 5
                      ? actorMap(actors).slice(0, 5).join(", ")
                      : actorMap(actors).join(", ")}
            </p>
        </>
    );
}

function renderMovieOriginalName(movie) {
    if (!movie || !movie.original_title) {
        return "Nome original não disponível";
    }

    return (
        <>
            <p>
                <strong>Nome original: </strong>
                {movie.original_title}
            </p>
        </>
    );
}

function renderMovieHomepage(movie) {
    if (!movie || !movie.homepage) {
        return null;
    }

    return (
        <>
            <p>
                <strong>Homepage: </strong>
                <iframe
                    src={movie.homepage}
                    width="500px"
                    height="300px"
                    title="Página inicial do filme"
                    frameBorder="0"
                ></iframe>{" "}
            </p>
        </>
    );
}

function renderMovieRating(movie) {
    if (!movie || !movie.vote_average) {
        return "Avaliação não disponível";
    }

    return (
        <>
            <p>
                <strong>Avaliação: </strong>
                {movie.vote_average}
            </p>
        </>
    );
}

function renderMovieDirector(movie) {
    if (!movie || movie.credits.crew.length === 0) {
        return "Diretor não disponível";
    }

    let director = movie.credits.crew.find(
        (member) => member.job == "Director",
    );

    return (
        <>
            <p>
                <strong>Diretor: </strong>
                {director ? director.name : "Diretor não disponível"}
            </p>
        </>
    );
}

export {
    renderMovieGenre,
    renderMovieCast,
    renderMovieOriginalName,
    renderMovieHomepage,
    renderMovieRating,
    renderMovieDirector,
};
