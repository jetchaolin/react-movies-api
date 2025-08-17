import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovie } from "../services/api.js";
import {
    renderMovieGenre,
    renderMovieCast,
    renderMovieOriginalName,
    renderMovieHomepage,
} from "../utils/frontendData.jsx";

function MovieDetails() {
    const { id } = useParams();
    console.log("ID: ", id);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function getMovieDetails(id) {
            console.log("test get movie details");
            try {
                setLoading(true);
                setError(null);

                const response = await fetchMovie(id);
                setMovie(response);
                console.log("Movie Details: ", response);
            } catch (err) {
                setError("Não foi possível achar o filme");
                console.log("Error fetching movie details", err);
            } finally {
                setLoading(false);
            }
        }

        getMovieDetails(id);
    }, [id]);

    return (
        <>
            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p>Erro ao carregar os filmes</p>
            ) : (
                <div>
                    <section id="details-section">
                        <div id="movie-poster-details">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={`${movie.title}`}
                            />
                        </div>
                        <div id="title-description">
                            <h1>{movie.title}</h1>
                            {renderMovieOriginalName(movie)}
                            {renderMovieGenre(movie)}
                            {renderMovieCast(movie)}
                            {/* {renderMovieHomepage(movie)} */}
                            <p>
                                <strong>Resumo:</strong> {movie.overview}
                            </p>
                        </div>
                    </section>

                    <section></section>
                </div>
            )}
        </>
    );
}

export default MovieDetails;
