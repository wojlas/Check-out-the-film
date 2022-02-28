const api_key = "8537b0d914febf25864d24367a49a18c";
const api_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=`;
// const api_key = "http://www.omdbapi.com/?s=all&apikey=180cd4c9"

export const poster_url = (url) => {
    return `https://image.tmdb.org/t/p/w500/${url}`;
};

export const api_genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;


export default api_url;