import React, { useState} from "react";

const Search = () => {  
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchValue);
    }

    return (
        <div>
            <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} />
            <button onClick={handleSubmit} >Wyszukaj</button>
        </div>
    )
}

export default Search