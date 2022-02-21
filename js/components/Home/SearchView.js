import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../redux/actions/search_movies";

//Component to 
const Search = () => {  
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    

    useEffect(()=> {
        setTimeout(()=> {
            dispatch(searchMovie(searchValue))
        }, 1000);
    }, [searchValue])

    return (
        <div style={{position: "absolute", height: "50px", width: "99%", backgroundColor: "#202020", display: "inline-block",
         paddingInline: "40px", margin: "0px"}}>
            <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} style={
                {height: "25px", width: "330px"}
            } placeholder="Wyszukaj wg tytułu"/>
        </div>
    )
}

export default Search