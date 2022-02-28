import { combineReducers } from "redux";
import fetchMovies from "./fetchMovies";
import genres from "./genres";
import rates from "./rates";
import toWatch from "./toWatch";

const reducer = combineReducers({
    fetchMovies,
    genres,
    rates,
    toWatch,
});

export default reducer;