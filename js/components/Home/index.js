import React, {useEffect, useState} from "react"
import Search from "./SearchView";
import SingleMovie from "./SingleMovie";
import { useDispatch, useSelector } from "react-redux";
import { moviesFetching, moviesFetched, fetchedError } from "../../redux/actions/api_actions";

import api_key from "../../api";

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
        <div>
            <a href="#">Wyszukiwarka</a>
            <a href="#">Do obejrzenia</a>
            <a href="#">Obejrzane</a>
        </div>
        <div>
            <Search />
            <SingleMovie />
        </div>
    </>
)};

export default Landing;