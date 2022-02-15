import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../redux/actions/search_movies";

//Component to 
const Search = () => {  
    const [searchValue, setSearchValue] = useState('');

    const dispatch = useDispatch();

    // useEffect(()=> {
    //     dispatch(searchMovie(searchValue))
    // }, [searchValue])

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(searchMovie(searchValue));
        
    // }

    return (
        <div>
            <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} />
            {/* <button onClick={handleSubmit} >Wyszukaj</button> */}
        </div>
    )
}

export default Search