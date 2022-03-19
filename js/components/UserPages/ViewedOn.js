import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { linkStyle } from "../Home";
import { showRated } from "../../redux/actions/movieRate";

const ViewedOn = () => {
    const [viewedMovies, setViewedMovies] = useState({movies: [], loading: false});
    const viewedState = useSelector(state => state.rates);
    const moviesState = useSelector(state => state.fetchMovies);

    const dispatch = useDispatch();

    useEffect(()=> {
        const ratedMoviesIds = []
        viewedState.forEach(movie => ratedMoviesIds.push(movie.id));
        dispatch(showRated(ratedMoviesIds));
    }, [viewedState]);

    useEffect(()=> {
        setViewedMovies({movies: moviesState.movies, loading: moviesState.loading});
    }, [moviesState]);
    console.log(moviesState)

    return (
        <>
            <div style={{height: "100px", width: "98%", backgroundColor: "#202020", display: "inline-block", paddingInline: "40px"}}> 
                <Link to="/" style={linkStyle} >Home</Link>
                <Link to="/toview" style={linkStyle}>To View</Link>
                <Link to="/viewed" style={linkStyle}>Viewed On</Link>
            </div>
            <div>
            {viewedMovies.loading === 'rated' && viewedMovies.movies.length > 0?
            (viewedMovies.movies.map(movie => {
                return <div key={movie.id}>{movie.title} {movie.release_date}</div>
            }))
             : ''}
            </div>
        </>
    )
}

export default ViewedOn;