import DetailsCard from "./DetailsCard";

const MoviesIndex = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <p>Nenhum filme encontrado.</p>;
    }

    return (
        <>
            {movies.map((movie) => (
                <DetailsCard key={movie.id} movie={movie} />
            ))}
        </>
    );
};

export default MoviesIndex;
