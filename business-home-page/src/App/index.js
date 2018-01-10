import React, { Component } from 'react'
import Nav from "./Nav";

function App(props) {
    let links = [{
        href: "/home",
        name: "Home"
    }, {
        href: "/about",
        name: "About"
    },
    {
        href: "/contact",
        name: "Contact"
    }];
    return (
        <div>
            <Nav
                links={links}
                parentStyle={{ backgroundColor: "#304D69" }}
                childStyle={{ color: "white" }}>
            </Nav>
            {/* <Div className="red" text="lorem ipsum"></Div>
            <Div className="blue" text="lorem ipsum"></Div>
            <Div className="yellow" text="lorem ipsum"></Div> */}
            <Gallery></Gallery>
        </div>
    )
}

export default App;