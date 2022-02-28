export const SINGLE_MOVIE = "SINGLE_MOVIE";
export const FETCH_GENRES = "FETCH_GENRES";
export const FILTER_GENRES = "FILTER_GENRES";

export const singleMovie = (payload) => ({
    type: SINGLE_MOVIE,
    payload
});

export const fetchGenres = (payload) => ({
    type: FETCH_GENRES,
    payload
});

export const filterGenres = (payload) => ({
    type: FILTER_GENRES,
    payload
});