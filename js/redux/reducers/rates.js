import { RATE_MOVIE } from "../actions/movieRate";

const rates = (state=[], action) => {
    switch(action.type) {
        case(RATE_MOVIE):
            return [...state, action.payload]
        default: return state
    }
}

export default rates;