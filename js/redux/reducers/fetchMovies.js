import { SAVE_MOVIES, FETCHED_ERROR, GET_MOVIES } from "../actions/api_actions";
import { SEARCH_MOVIE } from "../actions/search_movies";

const initialState = {
    movies: [],
    error: '',
    loading: false,
}

const fetchMovies = (state=initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, loading: true};
        case SAVE_MOVIES:
            return {...state, movies: [{id: (state.length > 0 ? Number(state[state.length-1].id+1) : Number(1)), value: action.payload}], loading: false};
        case FETCHED_ERROR:
            return {...state, error: action.payload, loading: false};
        case SEARCH_MOVIE:
            return [...state.movies].filter(movie=> movie.value.Title !== action.payload);
        default: return state;
    }
}

export default fetchMovies;