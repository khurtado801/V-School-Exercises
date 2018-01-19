import React, {component} from "react";
import "./index.css";
import Nav from "./Nav";

//constructor function
function Header(props){
    //don't forget parenthesis for the return
    return ( 
        //this is where our HTML element goes
        <div class="head">
            <h1></h1>
            <h3></h3>
            <Nav></Nav>
        </div>
            
        
    )
}
export default Header;