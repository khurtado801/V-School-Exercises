import React from 'react'

function Character(props) {
    // Destructure the character coming in through props
    let {skin_color, name} = props;
    return (
        <div>
            <h3>{name}</h3>
            <p>{skin_color}</p>
        </div>
    )
}

export default Character;
