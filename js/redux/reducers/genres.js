import { FETCH_GENRES, FILTER_GENRES } from "../actions/single_movie";

const genres = (state=[], action) => {
    switch (action.type) {
        case FETCH_GENRES:
            return [...state, action.payload.genres];
        case FILTER_GENRES:
            console.log(action.payload)
        default: return state;
    }
};

export default genres;