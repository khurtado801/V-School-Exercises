import React from 'react';
import "./index.css";

function Box(props) {
    // Set my new properties to the props coming in
    let {name, purpose, backgroundColor, color} = props;
    let style1 = {backgroundColor: backgroundColor, color: color}

    return (
        <div className="box" style={style1}>
            <h2>{name}</h2>
            <p>{purpose}</p>
        </div>
    )
}

export default Box