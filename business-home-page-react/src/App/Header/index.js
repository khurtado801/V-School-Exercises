import React, {component} from "react";
import "./index.css";

//constructor function
function Header(props){
    //don't forget parenthesis for the return
    return ( 
        //this is where our HTML element goes
        <header>
            <h1>Header</h1>
            <h3>Subheader</h3>
        </header>
    )
}
export default Header;