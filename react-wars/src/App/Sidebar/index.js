import React from 'react';
import {Link} from "react-router-dom";
import Characters from "../Charactes"

function Sidebar() {
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/characters"> Characters </Link>
        </div>
    )
}

export default Sidebar
