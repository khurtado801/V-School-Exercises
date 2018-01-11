import React from "react";
import "./Header.css";

function Header({brand, slogan}){
    return ( 
        <div className="header">
            <h1>{brand}</h1>
            <h2>{slogan}</h2>
        </div>
    )
}
export default Header;
