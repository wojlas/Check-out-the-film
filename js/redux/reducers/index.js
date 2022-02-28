import { combineReducers } from "redux";
import fetchMovies from "./fetchMovies";
import genres from "./genres";

const reducer = combineReducers({
    fetchMovies,
    genres
});

export default reducer;