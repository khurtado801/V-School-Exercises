import React, { Component } from 'react';
import "./index.css"

function Nav(props) {
    return (
        <div className="nav-wrapper">
            {props.links.map((link, index) => {
                return <a key={index} href={link.href}>{link.name}</a>
            })}
        </div>
    )
}

export default Nav;