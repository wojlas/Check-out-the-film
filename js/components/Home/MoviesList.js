import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { poster_url } from "../../api";
import { Link } from "react-router-dom";

const MoviesList = () => {
    const movie = useSelector(state=> state.fetchMovies)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        setMovies(movie.movies);
    }, [movie]);
    
    return (
        <div style={{float: "left", display: "block"}}>
            {movies ? ( movies.map((el, key) => {
                return (
                    <Link to={`/movie/${el.id}`} key={key++} ><div key={key++} 
                    style={{width: "180px", height: "220px" ,backgroundColor: "#E0E0E0", 
                    border: "solid black 0.5px", margin: "3px", float: "left", padding: "1px"}}>
                        <div style={{height: "30%", width: "100%", fontSize: "20px", fontStyle: "Sans-serif"}}>{el.title}</div>
                        <img src={poster_url(el.poster_path)} style={{height: "70%", width: "100%"}}/>
                    </div>
                    </Link>
                )
            })) : ''
            }
        </div>
    )
};

export default MoviesList;