import DetailsCard from "./DetailsCard";
import { favoriteArray } from "../services/favoriteService.js";

const FavoriteTab = ({ movies }) => {
    console.log("FavoriteTab favoriteArray: ", favoriteArray);
    if (!favoriteArray || favoriteArray.length == 0) {
        return <p>Nenhum filme adicionado aos favoritos.</p>;
    }

    let favoriteMovies = [];
    const checkForMoviesInFavorite = () => {
        for (let i = 0; i < movies.length; i++) {
            if (favoriteArray.includes(movies[i].id)) {
                favoriteMovies.push(movies[i]);
            }
        }
    };
    checkForMoviesInFavorite();
    console.log("FavoriteTab movies: ", favoriteMovies);

    return (
        <>
            <div id="favorite-movie">
                {favoriteMovies.map((movie) => (
                    <DetailsCard key={movie} movie={movie} />
                ))}
            </div>
        </>
    );
};

export default FavoriteTab;
