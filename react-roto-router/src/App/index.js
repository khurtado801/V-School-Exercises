import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Service from "../pages/Service"
import About from "../pages/About";
import Navbar from "./Navbar";



function App(props) {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route path="/services/:index" component={Service}></Route>
            </Switch>
        </div>

    )
}
export default App;
