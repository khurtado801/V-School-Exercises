import React, { Component } from 'react'

class NamesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        let { name } = this.state.inputs;
        this.props.addName(name);
        this.setState((prevState) => {
            return {
                inputs: {
                    name: ""
                }
            }
        })
    }

    render() {
        let { name } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={name} name="name" type="text" placeholder="Name" />
                <h1>{name}</h1>
                <button type="submit">Add Name</button>
            </form>
        )
    }
}

export default NamesForm;