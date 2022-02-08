import API_KEY from "../api/index";

const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

export const GET_MOVIES = "GET_MOVIES";
export const SAVE_MOVIES = "SAVE_MOVIES";
export const FETCHED_ERROR = "FETCHED_ERROR";

export const fetchMovies = () => (dispatch) => {
    dispatch(moviesFetching)

    API.fetchMovies()
        .then(response => (moviesFetched(response)))
        .catch(error => (fetchedError(error)))

}

export const moviesFetching = () => ({
    type: GET_MOVIES,
});

export const moviesFetched = (payload) => ({
    type: SAVE_MOVIES,
    payload,
});

export const fetchedError = (payload) => ({
    type: FETCHED_ERROR,
    payload,
});