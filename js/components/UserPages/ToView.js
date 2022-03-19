import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../Home";

const ToView = () => {
    return (
        <div style={{height: "100px", width: "98%", backgroundColor: "#202020", display: "inline-block", paddingInline: "40px"}}> 
            <Link to="/" style={linkStyle} >Home</Link>
            <Link to="/toview" style={linkStyle}>To View</Link>
            <Link to="/viewed" style={linkStyle}>Viewed On</Link>
        </div>
    )
};

export default ToView;