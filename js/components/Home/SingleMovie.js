import React from "react";
import { useSelector } from "react-redux";

const SingleMovie = () => {
    const movie = useSelector(state=> state.fetchMovies)
    return (
        <div>Hello
            {movie.movies.length === 0 ? '' :( movie.movies.map(el => {
                return (
                    <div key={el.id}>
                        <h3>{el.value.Title}</h3>
                        <img src={el.value.Poster} />
                        <h5>{el.value.Year}</h5>
                    </div>
                )
            }))}
        </div>
    )
};

export default SingleMovie;