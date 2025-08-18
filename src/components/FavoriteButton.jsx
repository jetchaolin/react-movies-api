import React, { useState, useEffect } from "react";

function FavoriteButton({ movie, favoriteArray, onFavoriteChange }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const isMovieInFavorites = favoriteArray.includes(movie.id);
        setIsFavorite(isMovieInFavorites);
    }, [favoriteArray, movie.id]);

    const handleFavoriteToggle = () => {
        const newIsFavorite = !isFavorite;
        setIsFavorite(newIsFavorite);

        onFavoriteChange(movie.id);
    };

    return (
        <div>
            <input
                type="checkbox"
                id={`favorite-checkbox-${movie.id}`}
                class="checkbox"
                checked={isFavorite} // Conecta o estado ao checkbox
                onChange={handleFavoriteToggle} // Chama a função na mudança
            />
            <label
                htmlFor={`favorite-checkbox-${movie.id}`}
                class="checkbox-label"
            >
                Adicionar aos Favoritos
            </label>
        </div>
    );
}

export default FavoriteButton;
