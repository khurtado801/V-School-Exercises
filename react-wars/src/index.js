import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import App from "./App";


ReactDOM.render(
    <BrowserRouter>
        <App name="React Wars" Founder="Ken Hurtado"/>
    </BrowserRouter>
    ,document.getElementById("root"));