import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleMovie } from "../../redux/actions/single_movie";
import { rateMovie } from "../../redux/actions/movieRate";
import { toWatch } from "../../redux/actions/movieRate";
import { Link } from "react-router-dom";
import { linkStyle } from "../Home";
import { poster_url } from "../../api";

//single movie page display menu on top and movie details
const SingleMovie = (props) => {
    const {match} = props;

    const [movie, setMovie] = useState(null);
    const [movieGenres, setMovieGenres] = useState(null);
    const [rate, setRate] = useState({})
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

    const handleVote = (e) => {
        e.preventDefault();
        dispatch(rateMovie({id: movie.id, rate: rate}))
    }

    const addToWatch = e => {
        e.preventDefault();
        dispatch(toWatch(movie.id))
    }


    return (
        <>
        <div style={{height: "100px", width: "98%", backgroundColor: "#202020", display: "inline-block", paddingInline: "40px"}}> 
            <Link to="/" style={linkStyle} >Home</Link>
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
                <div>
                    <input type="radio" checked={rate==1} onChange={() => setRate(1)} />1
                    <input type="radio" checked={rate==2} onChange={() => setRate(2)} />2
                    <input type="radio" checked={rate==3} onChange={() => setRate(3)} />3
                    <input type="radio" checked={rate==4} onChange={() => setRate(4)} />4
                    <input type="radio" checked={rate==5} onChange={() => setRate(5)} />5
                    <input type="radio" checked={rate==6} onChange={() => setRate(6)} />6
                    <input type="radio" checked={rate==7} onChange={() => setRate(7)} />7
                    <input type="radio" checked={rate==8} onChange={() => setRate(8)} />8
                    <input type="radio" checked={rate==9} onChange={() => setRate(9)} />9
                    <input type="radio" checked={rate==10} onChange={() => setRate(10)} />10
                    <button onClick={(e) => handleVote(e)} >Vote!</button>
                    <button onClick={(e) => addToWatch(e)}>To watch</button>
                </div>
                <div style={{float: "left", textAlign: "justify", height: "100px", width: "915px", border: "1px solid black"}}>
                    {movie.overview}
                </div>
                <div style={{textAlign: "right", fontStyle: "Sans-serif", color: "#FFFFFF", fontSize: "25px", textDecoration: "none",}}><Link to="/">BACK</Link></div>
            </div>
        ) : 'error' }
        </>
)};

export default SingleMovie;