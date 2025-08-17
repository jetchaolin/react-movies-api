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

function renderMovieCast(movie) {
    if (!movie || !movie.credits.cast || movie.credits.cast.length === 0) {
        return "Elenco não disponível";
    }
    let actors = movie.credits.cast || [];

    return (
        <>
            <p>
                <strong>Elenco: </strong>
                {actors.map((actor) => actor.name).join(", ")}
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

export {
    renderMovieGenre,
    renderMovieCast,
    renderMovieOriginalName,
    renderMovieHomepage,
};
