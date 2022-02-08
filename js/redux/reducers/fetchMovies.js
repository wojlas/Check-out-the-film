import { SAVE_MOVIES, FETCHED_ERROR } from "../actions/api_actions";

const initialState = {
    movies: [],
    error: '',
}

const fetchMovies = (state=[], action) => {
    switch (action.type) {
        case SAVE_MOVIES:
            return {...state, movies: action.payload};
        case FETCHED_ERROR:
            return {...state, error: action.payload};
    }
}

export default fetchMovies;