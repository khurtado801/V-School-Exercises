import React, { Component } from 'react'
import Card from "./Card";

function App() {
    let vacationSpots = [  
        {
          place: "Seattle",
          price: "$400",
          timeToGo: "summer"
        },{
          place: "San Francisco",
          price: "$500",
          timeToGo: "spring"
        },{
          place: "Australia",
          price: "$1200",
          timeToGo: "winter"
        },{
          place: "Tokyo",
          price: "$1500",
          timeToGo: "fall"
        },{
          place: "Italy",
          price: "$1700",
          timeToGo: "spring"
        }
      ]
    
    return (
        <div className="app-wrapper">
            <Card vacationSpots={vacationSpots}>
            </Card>
        </div>
    )
}


export default App