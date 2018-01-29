import React, { Component } from 'react';
import axios from "axios";

export default class App extends Component {
    componentDidMount() {
        axios.get("http://localhost:8080/bounty")
            .then((response) => {
                console.log(response.data);
            })
    }
    render() {
        return (
            <div>
                test
            </div>
        )
    }
}