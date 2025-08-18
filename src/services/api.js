import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const MAIN_LANGUAGE = "pt-BR";

const api = axios.create({
    baseURL: BASE_URL,
});

export const fetchMovies = async (query, page = 1) => {
    try {
        const response = await api.get("search/movie", {
            params: {
                api_key: API_KEY,
                query,
                page,
                language: MAIN_LANGUAGE,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchMovie = async (movieId) => {
    try {
        const response = await api.get(`/movie/${movieId}`, {
            params: {
                api_key: API_KEY,
                language: MAIN_LANGUAGE,
                append_to_response: "credits",
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchPopMovies = async (page = 1) => {
    try {
        const response = await api.get("movie/popular", {
            params: {
                api_key: API_KEY,
                page,
                language: MAIN_LANGUAGE,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default api;
