import React, { Component } from "react";
import superheros from "./superheros.json";
import SuperHero from "./SuperHero";

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            superheros: superheros
        }
        this.display = this.display.bind(this);
    }
    display(i) {
        alert(this.state.superheros[i].catchphrase);
    }
    render() {
        let { superheros } = this.state;
        return (
            <div>
                {superheros.map((hero, index) => {
                    return <SuperHero key= {index}{...hero} index={index} display={this.display} />
                })}
            </div>
        )
    }
}

export default App;