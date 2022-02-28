import { TO_WATCH } from "../actions/movieRate";

const toWatch = (state=[], action) => {
    switch(action.type) {
        case TO_WATCH:
            return [...state, action.payload]
        default: return state
    }
};

export default toWatch;