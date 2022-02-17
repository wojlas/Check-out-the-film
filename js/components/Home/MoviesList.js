import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";

const MoviesList = () => {
    const movie = useSelector(state=> state.fetchMovies)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        setMovies(movie.movies);
    }, [movie]);
    
    return (
        <div >
            {movies ? ( movies.map(el => {
                return (
                    <div key={el.id} 
                    style={{width: "140px", height: "180px" ,backgroundColor: "#E0E0E0", 
                    border: "solid black 0.5px", margin: "3px", float: "left"}}>
                        <h3>{el.title}</h3>
                        {/* <img src={el.Poster} style={{height: "100%", width: "100%"}}/> */}
                        <h5>{el.release_date}</h5>
                    </div>
                )
            })) : ''
            }
        </div>
    )
};

export default MoviesList;