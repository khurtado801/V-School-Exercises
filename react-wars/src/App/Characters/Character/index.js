import React from 'react'

function Character(props) {
    // Destructure the character coming in through props
    let {artist, title} = props;
    return (
        <div>
            <h3>{title}</h3>
            <p>{artist}</p>
        </div>
    )
}

export default Character;

