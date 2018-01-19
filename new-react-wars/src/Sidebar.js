import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            people: []
        }
}

componentDidMount() {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
        this.setState({
            people: response.data.results
        });
    });
}

render() {
    const peopleList = this.state.people.map((person, index) => 
    <Link style={{display: "block"}} to={`/person/${index + 1}`} key={index + person.name}>{person.name}</Link>
    )
    return (
    <div>
        {peopleList}
    </div>
    )
}
}

export default Sidebar