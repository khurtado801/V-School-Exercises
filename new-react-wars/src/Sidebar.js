import React, { Component } from 'react';
import axios from "axios"


class Artists extends Component {
    constructor() {
        super();
        this.state = {
        person: {}
    }
}

componentDidMount() {
    axios.get(`http://musicbrainz.org/ws/2/cdstub/?query=artist:Beastie%Boys&fmt=json/${this.props.match.params.id}`)
    .then(response => {
        this.setState({
            person: response.data
        })
        console.log(response.data);
    })
}

componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
        axios.get(`http://musicbrainz.org/ws/2/cdstub/?query=artist:Beastie%Boys&fmt=json/${nextProps.match.params.id}`)
        .then(response => {
            this.setState({
                person: response.data
            })
        }) 
    }
}


render() {
    console.log(this.state.person.title);
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

export default Artists;
