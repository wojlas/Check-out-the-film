import { SAVE_MOVIES, FETCHED_ERROR, GET_MOVIES } from "../actions/api_actions";
import { SHOW_RATED } from "../actions/movieRate";
import { SEARCH_MOVIE } from "../actions/search_movies";
import { SINGLE_MOVIE } from "../actions/single_movie";

const initialState = {
    movies: [],
    error: '',
    loading: false,
}

let fetchedMovies = [];

const fetchMovies = (state=initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            fetchedMovies = [];
            return {...state, loading: true};
        case SAVE_MOVIES:
            action.payload.results.forEach(el => {
                    fetchedMovies.push(el)
            });
            return {...state, movies: fetchedMovies, loading: false};
        case FETCHED_ERROR:
            return {...state, error: action.payload, loading: false};
        case SEARCH_MOVIE:
            if (action.payload === '') {
                return {...state, movies: fetchedMovies}
            } else {
                const searchedTitle = [...state.movies].filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()));
                return {...state, movies: [...searchedTitle]}
            };
        case SINGLE_MOVIE:
            const stateCopy = state.movies.filter(el=> el.id === Number(action.payload));
            return {...state, movies: [...stateCopy]};
        case SHOW_RATED:
            const ratedMovies = [...state.movies].filter(el => action.payload.includes(el.id));
            return {...state, movies: ratedMovies, loading: 'rated'}
        default: return state;
    }
}

export default fetchMovies;