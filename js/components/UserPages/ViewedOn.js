import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { linkStyle } from "../Home";
import { showRated } from "../../redux/actions/movieRate";
import SingleListElementMovie from "./SingleListElementMovie";

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
    console.log([...viewedState])

    return (
        <>
            <div style={{height: "100px", width: "98%", backgroundColor: "#202020", display: "inline-block", paddingInline: "40px"}}> 
                <Link to="/" style={linkStyle} >Home</Link>
                <Link to="/toview" style={linkStyle}>To View</Link>
                <Link to="/viewed" style={linkStyle}>Viewed On</Link>
            </div>
            <div style={{textAlign: "center"}}>
            {viewedMovies.loading === 'rated' && viewedMovies.movies.length > 0?
            (viewedMovies.movies.map(movie => {
                const rateID = viewedState.find(el => el.id === movie.id);
                return <SingleListElementMovie key={movie.id} movie={movie} rates={rateID} />
            }))
             : ''}
            </div>
        </>
    )
}

export default ViewedOn;