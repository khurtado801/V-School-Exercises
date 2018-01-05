import React, {Component} from "react";
import Boxes from "./Boxes";
import "./index.css";

//constructor definition
function Content(props){
    let data = [{
        name: "Z3000",
        manufacturer: "TipTop Audio",
        purpose: "Voltage Controlled Oscillator",
        backgroundColor: "#A2A2A9",
        color: "black"
    },
    {
        name: "Jellysquasher",
        manufacturer: "Intellijel",
        purpose: "Analog Compressor",
        backgroundColor: "#A9A9A9",
        color: "black"
    },
    {
        name: "Three Sisters",
        manufacturer: "Mannequins",
        purpose: "Filter",
        backgroundColor: "#A2A2A9",
        color: "black"
    },
    {
        name: "QUAD",
        manufacturer: "Sputnik Modular",
        purpose: "Quad lowpass gate",
        backgroundColor: "#A9A9A9",
        color: "black"
    },
    {
        name: "Z3000",
        manufacturer: "TipTop Audio",
        purpose: "Matrix Sequencer",
        backgroundColor: "#A2A2A9",
        color: "black"
    },
    {
        name: "Clouds",
        manufacturer: "Mutable Instruments",
        purpose: "Grainular Synthesizer",
        backgroundColor: "#A9A9A9",
        color: "black"
    },
    {
        name: "Dixie II",
        manufacturer: "Intellijel",
        purpose: "Low Frequency Oscillator",
        backgroundColor: "#A2A2A9",
        color: "black"
    },
    {
        name: "uScale II",
        manufacturer: "Intellijel",
        purpose: "Quantizer",
        backgroundColor: "#A9A9A9",
        color: "black"
    },
    {
        name: "Richter Dual Borg Fiilter",
        manufacturer: "Malekko",
        purpose: "Filter",
        backgroundColor: "#A2A2A9",
        color: "black"
    },
    {
        name: "Echophon",
        manufacturer: "Make Noise",
        purpose: "Dual Delay",
        backgroundColor: "#A9A9A9",
        color: "black"
    }]

    return (
        <div className="box-wrapper">
        {data.map((myModules) => {
        return <Boxes {...myModules}></Boxes>
        })}
        </div>
        )
}
export default Content;