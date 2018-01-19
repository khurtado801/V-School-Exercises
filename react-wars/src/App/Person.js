import React, { Component } from 'react';
import axios from "axios";

class Person extends Component {
    constructor() {
        super();
        this.state = {
            person: {}
        }
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    person: response.data
                })
                console.log(response.data);
            })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            axios.get(`https://swapi.co/api/people/${nextProps.match.params.id}`)
                .then(response => {
                    this.setState({
                        person: response.data
                    })
                })
        }

    }


    render () {
        return (
            <div>
                <h1 style={{color: "green"}}>{this.state.person.name}</h1>
                <h3>Eye Color: {this.state.person.eye_color}</h3>
                <h3>Mass: {this.state.person.mass}</h3>
                <h3>Height: {this.state.person.height}</h3>
                <h3>Hair Color: {this.state.person.hair_color}</h3>
                <h3>Skin Color: {this.state.person.skin_color}</h3>
                <h3>Birth Year: {this.state.person.birth_year}</h3>
                <h3>Gender: {this.state.person.gender}</h3>
            </div>
        )
    }
}

export default Person