import React, { Component } from 'react';
import axios from "axios";

import Form from '../containers/Form/Form';

class App extends Component {
    componentDidMount() {
        axios.get("http://localhost:8080/bounty")
            .then((response) => {
                console.log(response.data);
            })
    }
    render() {
        return (
            <div class="App">
                <Form />
            </div>
        )
    }
}
export default App;