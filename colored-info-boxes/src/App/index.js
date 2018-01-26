import React, {component} from "react";
import Content from "./Content";
import "./index.css";

function App(props){
    
    return (
        <div>
            <div className="title-wrapper">
                <h1>Hello, World!</h1>
                <h2>Welcome to my React Colored Info Boxes.</h2>
            </div>
            <Content></Content>
        </div>
    )
}

export default App;