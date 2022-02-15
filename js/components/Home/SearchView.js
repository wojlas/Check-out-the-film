import React, { useState } from "react";
import { useDispatch } from "react-redux";

//Component to 
const Search = () => {  
    const [searchValue, setSearchValue] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchMovies(searchValue));
        
    }

    return (
        <div>
            <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} />
            <button onClick={handleSubmit} >Wyszukaj</button>
        </div>
    )
}

export default Search