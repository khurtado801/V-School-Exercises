import React, { Component } from 'react'
import Character from "./Character";
import axios from "axios";
const swUrl = "https://swapi.co/api/people"

// Order of things:
// 1. When the component mounts, make GET request.
// 2. When the data comes back, set state to contain data.
// 3. Display data.

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loading: true,
            err: false,
            errMsg: ""
        }
    }

// Once it's mounted, it will make a GET request
componentDidMount() {
    // Axios followed by whatever method we want to use
    // Once this gets resolved, 'then' do something
    axios.get(swUrl)
        // 'Then' takes a callback function
        // The 'then' gives the callback function whatever its response was from the GET request
        // It's common to use 'response'.
        .then((response) => {
            // Declare and initialize variable to hold new data
            let results = response.data.results;
            // Set state to new data, we don't need to know what the previous state was so no callback function
            this.setState({
                // Characters set to results
                characters: results,
                // If we get our results, set state to false
                loading: false
            });
        })
        // If there's a problem it sends us an error.
        // So we put error in the callback function 
        .catch((err) => {
            // And just console log the error
            console.error(err);
            this.setState({
                loading: false,
                errMsg: err.message
            })
        })
}

    render () {
        // Destruct state
        let {characters, loading, err, errMsg} = this.state;
        return (
            //  Turnary operator
            // If we are loading
            loading ?   
            <div>
                <h1>I'M LOADING!!</h1>
            </div>
            // Nested turnary
            :
            // If error
                err ?
                    <div>
                        {/* Display message */}
                        <p>Sorry, data in unavailable.</p>
                        <p>{errMsg}</p>
                    </div>

            // Else display this <div>
            :
            <div>
                {/* Callback function called for each element in the array */}
                {characters.map((character, i) => {
                    {/* Return character component, which we have to make */}
                    return <Character key={i} {...character}></Character>
                })}
            </div>
        )
    }
}
export default Characters

                