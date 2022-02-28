import { combineReducers } from "redux";
import fetchMovies from "./fetchMovies";
import genres from "./genres";
import rates from "./rates";

const reducer = combineReducers({
    fetchMovies,
    genres,
    rates
});

export default reducer;