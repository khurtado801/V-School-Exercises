import React, {Component} from "react";
import "./index.css";

function Box(props) {
    let {name, manufacturer, purpose, backgroundColor, color} = props;
    //let style1 = {backgroundColor: "#F5F5F3", color: "black"}
    let style1 = {backgroundColor: backgroundColor, color: color}
    return (
    <div className="box" style = {style1}>
        <h2>{name}</h2>
        <h3>{manufacturer}</h3>
        <p>{purpose}</p>
        </div>
        )
}

export default Box;
