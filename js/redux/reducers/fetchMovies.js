import { SAVE_MOVIES, FETCHED_ERROR, GET_MOVIES } from "../actions/api_actions";
import { SEARCH_MOVIE } from "../actions/search_movies";

const initialState = {
    movies: [],
    error: '',
    loading: false,
}

const fetchedMovies = [];

const fetchMovies = (state=initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, loading: true};
        case SAVE_MOVIES:
            action.payload.results.forEach(el => {
                fetchedMovies.push(el)
            })
            return {...state, movies: fetchedMovies, loading: false};
        case FETCHED_ERROR:
            return {...state, error: action.payload, loading: false};
        case SEARCH_MOVIE:
            if (action.payload === '') {
                return state;
            } else {
                const searchedTitle = [...state.movies].filter(el => el.Title.toLowerCase().includes(action.payload.toLowerCase()));
                console.log(searchedTitle)
                console.log({...state, movies: [...searchedTitle]})
            }
        default: return state;
    }
}

export default fetchMovies;