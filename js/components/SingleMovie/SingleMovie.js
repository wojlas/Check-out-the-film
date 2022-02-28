import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleMovie } from "../../redux/actions/single_movie";
import { Link } from "react-router-dom";
import { linkStyle } from "../Home";
import { poster_url } from "../../api";

const SingleMovie = (props) => {
    const {match} = props;

    const [movie, setMovie] = useState(null);
    const [movieGenres, setMovieGenres] = useState(null);
    const dispatch = useDispatch();
    const stateMovies = useSelector(state => state.fetchMovies);
    const stateGenres = useSelector(state => state.genres);

    useEffect(()=> {
        dispatch(singleMovie(match.params.id))
    }, []);

    useEffect(()=> {
        setMovie(stateMovies[0]);
        
    }, [stateMovies]);

    useEffect(()=> {
        if (movie && stateGenres) {
            setMovieGenres(stateGenres[0].filter(genre => movie.genre_ids.some(id => id === genre.id)))
        }
    }, [movie])
    


    return (
        <>
        <div style={{height: "100px", width: "98%", backgroundColor: "#202020", display: "inline-block", paddingInline: "40px"}}> 
            <Link to="/" style={linkStyle} > Home </Link>
            <a href="#" style={linkStyle}>To View</a>
            <a href="#" style={linkStyle}>Viewed On</a>
        </div>
        {movie ? (
            <div style={{backgroundColor: "#E0E0E0", marginTop: "15px",}}>
                <div style={{textAlign: "center", fontStyle: "Sans-serif", fontSize: "45px", border: "1px solid black"}}>
                    {movie.title}
                </div>
                <div style={{float: "left", alignContent: "left", height: "700px", width: "430px"}}>
                    <img src={poster_url(movie.poster_path)} style={{height: "100%", width: "100%"}}/>
                </div>
                <div>Realease date: {movie.release_date}</div>
                <div>Rating: {movie.vote_average}</div>
                <div>Genres: {movieGenres ? (movieGenres.map(genre => {
                    return <span key={genre.id}> {genre.name}</span>
                })) : ''}</div>
                <div style={{float: "left", textAlign: "justify", height: "100px", width: "915px", border: "1px solid black"}}>
                    {movie.overview}
                </div>
                <div style={{textAlign: "right", fontStyle: "Sans-serif", color: "#FFFFFF", fontSize: "25px", textDecoration: "none",}}><Link to="/">BACK</Link></div>
            </div>
        ) : 'error' }
        </>
)};

export default SingleMovie;