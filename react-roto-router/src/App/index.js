import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/About";

function App(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>   
    )
}
export default App;
