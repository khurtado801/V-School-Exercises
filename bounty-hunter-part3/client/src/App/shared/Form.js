import React, { Component } from 'react';

let axios = require('axios')

export default class Form extends Component {
    constructor(props) {
        super(props);
        let { title, description, price, imgUrl, completed } = props;
        this.state = {
            inputs: {
                title: title || "",
                description: description || "",
                price: price || "",
                imgUrl: imgUrl || "",
                completed: completed || false
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let { name, value, checked, type } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: type === "checkbox" ? checked : value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                title: "",
                description: "",
                price: "",
                imgUrl: "",
                completed: false
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let todo = { ...this.state.inputs };
        todo.price = Number(todo.price);
        this.props.submit(todo);
        if (this.props.clear) this.clearInputs();
    }
    render() {
        let { title, description, price, imgUrl, completed } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="title" />
                <input onChange={this.handleChange} value={description} name="description" type="text" placeholder="description" />
                <input onChange={this.handleChange} value={price} name="price" type="number" placeholder="price" />
                <input onChange={this.handleChange} value={imgUrl} name="imgUrl" type="text" placeholder="imgUrl" />
                <label htmlFor="completed">
                    Completed:
                <input onChange={this.handleChange} name="completed" checked={completed} id="completed" type="checkbox" />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}