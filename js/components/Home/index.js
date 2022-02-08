import React from "react"
import Search from "./SearchView";

const Landing = () => (
    <>
        <div>
            <a href="#">Wyszukiwarka</a>
            <a href="#">Do obejrzenia</a>
            <a href="#">Obejrzane</a>
        </div>
        <div>
            <Search />
        </div>
    </>
)

export default Landing;