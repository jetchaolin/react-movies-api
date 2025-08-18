import { Link } from "react-router-dom";
import truncateText from "../services/truncateText.js";

const DetailsCard = ({ movie }) => {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;

    return (
        <Link id="details-card" to={`/movieDetails/${movie.id}`}>
            {posterUrl ? (
                <img src={posterUrl} alt={movie.title} />
            ) : (
                <p>Sem imagem disponível</p>
            )}
            <p id={movie.title}>{truncateText(movie.title, 20)}</p>
            {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : ""}
        </Link>
    );
};

export default DetailsCard;
