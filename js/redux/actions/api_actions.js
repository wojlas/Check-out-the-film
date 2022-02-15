export const GET_MOVIES = "GET_MOVIES";
export const SAVE_MOVIES = "SAVE_MOVIES";
export const FETCHED_ERROR = "FETCHED_ERROR";

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