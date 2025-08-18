import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { fetchMovies, fetchPopMovies } from "../services/api.js";
import SearchBar from "../components/SearchBar.jsx";
import Pagination from "../components/Pagination.jsx";
import MoviesIndex from "../components/MoviesIndex.jsx";
import FavoriteTab from "../components/FavoriteTab.jsx";

import "../App.css";

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query") || "";
    const page = Number(queryParams.get("page") || "1", 10);

    useEffect(() => {
        async function fetchAllMovies() {
            setLoading(true);
            setError(null);

            try {
                let data;
                if (query) {
                    data = await fetchMovies(query, page);
                } else {
                    data = await fetchPopMovies(page);
                }
                setMovies(data.results);
                setTotalPages(data.total_pages);
                setTotalResults(data.total_results);
            } catch (error) {
                setError("Não foi possível carregar os filmes.");
                console.error("ERROR: failed to fetch movies", error);
            } finally {
                setLoading(false);
            }
        }

        fetchAllMovies();
    }, [query, page]);

    const handleSearch = (searchQuery) => {
        navigate(`/?query=${encodeURIComponent(searchQuery)}&page=1`);
    };

    const handlePageChange = (newPage) => {
        if (query) {
            navigate(`/?query=${encodeURIComponent(query)}&page=${newPage}`);
        } else {
            navigate(`/?page=${newPage}`);
        }
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {query && !loading && !error && (
                <>
                    {totalResults > 0 ? (
                        <span id="search-results">
                            Encontrados {totalResults} resultados para {query}
                        </span>
                    ) : (
                        <span id="search-results">
                            Nenhum resultado encontrado para {query}
                        </span>
                    )}
                </>
            )}

            <div id="movie-index">
                {loading ? (
                    <p>Carregando...</p>
                ) : error ? (
                    <p>Erro ao carregar os filmes</p>
                ) : (
                    <>
                        {FavoriteTab && !query && !loading && !error && (
                            <>
                                <div>
                                    <h1 id="fav-movies">Meus Favoritos</h1>
                                </div>
                                <FavoriteTab movies={movies} />
                            </>
                        )}
                        {!query && !loading && !error && (
                            <div>
                                <h1 id="pop-movies">Filmes Populares</h1>
                            </div>
                        )}
                        <MoviesIndex movies={movies} />
                        {totalPages > 1 && (
                            <Pagination
                                currentPage={page}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default Home;
