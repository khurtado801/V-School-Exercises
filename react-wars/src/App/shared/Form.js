import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        this.state
    }
    render () {
        return (
            <div>
                <input name="name" type="text" placeholder="name" />
                <input name="height" type="text" placeholder="height" />
                <input name="hair_color" type="text" placeholder="hair color" />
                <input name="skin_color" type="text" placeholder="skin color" />
                <input name="birth_year" type="text" placeholder="birth year" />
                <input name="gender" type="text" placeholder="gender" />
            </div>
        )
    }
}

export default Form