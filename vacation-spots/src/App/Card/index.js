import React, { Component } from 'react'
import "./index.css"

function Card(props) {
    let vacationSpots = props.vacationSpots
    let seasonColors = {
        winter: {
            backgroundColor: "#fbd24e"
        },
        spring: {
            backgroundColor: "#9f0a28"
        },
        summer: {
            backgroundColor: "#3A5F0B"
        },
        fall: {
            backgroundColor: "#bae5fa"
        }
    }
    return (
        <div className="card-wrapper" >
            
            {vacationSpots.map((spot) => {
                 return <div className="card" style={seasonColors[spot.timeToGo]}>
                    <h1>{spot.place}</h1>
                    <h2>{spot.price}</h2>
                </div>
            })}

        </div>
    )
}


export default Card