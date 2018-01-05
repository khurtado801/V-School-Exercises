import React, {component} from "react";
import Header from "./Header";
import Nav from "./Nav"
import Content from "./Content";

function App(props){
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

        <Nav links={links}></Nav>
            <Header></Header>
            <h1>Hello, World!</h1>
            <h2>Welcome to my Business homepage.</h2>
        </div>
    )
}

export default App;