import { combineReducers } from "redux";
import fetchMovies from "./fetchMovies";

const reducer = combineReducers({
    fetchMovies
});

export default reducer;