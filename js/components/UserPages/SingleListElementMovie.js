import React from "react";
import { poster_url } from "../../api";

const SingleListElementMovie = ({movie, rates}) => {
    const {title, poster_path, vote_average} = movie;
    return (
        <div style={{display: "inline-block", width: "65%", height: "60px", border: "0.5px solid black",  backgroundColor: "#A0A0A0"}}>
                    <div style={{float: "left", width: "40px", lineHeight: "60px"}}><img src={poster_url(poster_path)} style={{height: "100%", width: "100%"}}/></div>
                    <div style={{float: "left", width: "690px", lineHeight: "60px"}}>{title}</div>
                    <div style={{float: "left", width: "20px", lineHeight: "60px"}}>{vote_average}</div>
                    <div style={{float: "left", width: "20px", lineHeight: "60px"}}>{rates.rate}</div>
                    </div>
    )
}

export default SingleListElementMovie;

