import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <form id="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar filmes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            ></input>
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar;
