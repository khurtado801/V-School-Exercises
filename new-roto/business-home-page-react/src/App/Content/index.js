import React, { Component } from 'react';
import Box from "./Box";
import "./index.css";

function Content(props) {
    let data = [{
        name: "Z3000",
        purpose: "Voltage Controlled Oscillator",
        backgroundColor: "#A2A2A9",
        color: "black"
    },
    {
        name: "Three Sisters",
        purpose: "Filter",
        backgroundColor: "#A2A2A9",
        color: "black"
    }]

    
    return (
        <div className="box-wrapper">
            {data.map((myModule) => {
                return <Box {...myModule}></Box>
            })}

        </div>
    )
} 
export default Content;