import React from 'react'
import {Switch, Route} from "react-router-dom";
import Home from "../App/pages/Home";
import Sidebar from "../App/Sidebar";
import Characters from "../App/Charactes";


function App(props) {
    return (
        <div>
            <Sidebar></Sidebar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/characters" component={Characters} />
            </Switch>
        </div>
    )
}

export default App;