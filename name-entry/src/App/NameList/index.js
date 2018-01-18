import React, { Component } from 'react';
import NamesForm from "./NamesForm";

class NameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: []
        }
        this.addName = this.addName.bind(this);
        this.reset = this.reset.bind(this);
    }
    addName(name) {
        this.setState((prevState) => {
            return {
                names: [name,...prevState.names]
            }
        })
    }

    reset() {
        this.setState({names: []}); 
    }
    
    render() {
        let {names} = this.state;
        return (
            <div>
                <NamesForm addName={this.addName}></NamesForm>
                <ol>
                    {names.map((name, i) => {
                        return <li key={i}>{name}</li>
                    })}
                </ol>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default NameList;