import React, { Component } from 'react'
import "./index.css"

function Card(props) {
    let vacationSpots = props.vacationSpots
    let seasonColors = {
        winter: {
            backgroundColor: "#00BFFF"
        },
        spring: {
            backgroundColor: "#F0FFF0"
        },
        summer: {
            backgroundColor: "#DC143C"
        },
        fall: {
            backgroundColor: "#FAFAD2"
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