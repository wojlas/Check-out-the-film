import React, {useEffect, useState} from "react"
import Search from "./SearchView";
import MoviesList from "./MoviesList";
import { useDispatch } from "react-redux";
import { moviesFetching, moviesFetched, fetchedError } from "../../redux/actions/api_actions";
import api_key from "../../api";

const linkStyle= {
    fontStyle: "Sans-serif",
    color: "#FFFFFF",
    fontSize: "25px",
    textDecoration: "none",
    margin: "15px",
    position: "relative",
    top: "35%",
    transform: "translate(0, -50%)",
    
}



const Landing = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(moviesFetching());

        fetch(api_key)
            .then(resp=> resp.json())
            .then(resp=> dispatch(moviesFetched(resp)))
            .catch(error=> dispatch(fetchedError(error)))   
    },[])

    return (
    <>
        <div style={{height: "100px", width: "99%", backgroundColor: "#202020", display: "inline-block"}}> 
            <a href="#" style={linkStyle}>Wyszukiwarka</a>
            <a href="#" style={linkStyle}>Do obejrzenia</a>
            <a href="#" style={linkStyle}>Obejrzane</a>
        </div>
        <div>
            <Search />
            <MoviesList />
        </div>
    </>
)};

export default Landing;