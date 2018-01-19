import React from 'react';

import {Switch, Route} from "react-router-dom";
import Sidebar from "./Sidebar";
import Person from "./Person"

function App(props) {
    return (
        <div>
            <Sidebar />
            <Switch>
                <Route path='/person/:id' component={Person}/>
            </Switch>
        </div>
    )
}

export default App
