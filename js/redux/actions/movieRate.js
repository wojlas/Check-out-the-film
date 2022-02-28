export const RATE_MOVIE = "RATE_MOVIE";
export const TO_WATCH = "TO WATCH";

export const rateMovie = (payload) => ({
    type: RATE_MOVIE,
    payload,
});

export const toWatch = (payload) => ({
    type: TO_WATCH,
    payload,
});