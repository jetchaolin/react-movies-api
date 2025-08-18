import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovie } from "../services/api.js";
import { toggleFavorite, favoriteArray } from "../services/favoriteService.js";
import {
    renderMovieGenre,
    renderMovieCast,
    renderMovieOriginalName,
    renderMovieRating,
    renderMovieDirector,
} from "../utils/frontendData.jsx";
import FavoriteButton from "../components/FavoriteButton.jsx";

function MovieDetails() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };
    useEffect(() => {
        async function getMovieDetails(id) {
            try {
                setLoading(true);
                setError(null);

                const response = await fetchMovie(id);
                setMovie(response);
            } catch (err) {
                setError("Não foi possível achar o filme", err);
            } finally {
                setLoading(false);
            }
        }

        getMovieDetails(id);
    }, [id]);

    const handleCheckboxChange = () => {
        toggleFavorite(movie);
    };

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
                            {renderMovieDirector(movie)}
                            {renderMovieGenre(movie)}
                            {renderMovieRating(movie)}
                            <FavoriteButton
                                movie={movie}
                                favoriteArray={favoriteArray}
                                onFavoriteChange={() => {
                                    handleCheckboxChange(movie);
                                }}
                            />
                            <p>
                                <strong>Resumo:</strong> {movie.overview}
                            </p>
                            {renderMovieCast(movie, isExpanded)}
                            <button id="cast-expand" onClick={toggleExpanded}>
                                {isExpanded ? "Mostrar menos" : "Mostrar mais"}
                            </button>
                        </div>
                    </section>

                    <section></section>
                </div>
            )}
        </>
    );
}

export default MovieDetails;
