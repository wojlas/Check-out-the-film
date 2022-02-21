import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleMovie } from "../../redux/actions/single_movie";
import { Link } from "react-router-dom";
import { linkStyle } from "../Home";

const SingleMovie = (props) => {
    const {match} = props;

    const [movie, setMovie] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector(state => state.fetchMovies);

    useEffect(()=> {
        dispatch(singleMovie(match.params.id))
    }, []);

    useEffect(()=> {
        setMovie(state[0]);
    }, [state]);

    return (
        <>
        <div style={{height: "100px", width: "98%", backgroundColor: "#202020", display: "inline-block", paddingInline: "40px"}}> 
            <Link to="/" style={linkStyle} > Home </Link>
            <a href="#" style={linkStyle}>To View</a>
            <a href="#" style={linkStyle}>Viewed On</a>
        </div>
        {movie ? (
            <div>{movie.title}</div>
        ) : 'error' }
        </>
)};

export default SingleMovie;