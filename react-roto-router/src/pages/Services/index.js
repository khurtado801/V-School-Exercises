//rsc
import React from 'react'
import { Link } from "react-router-dom";
import services from "../../shared/services.json";
import "./index.css";

function Services(props) {
    return (
        <div>
            <h1>Services</h1>
            <div>
                {services.map((service, i) => {
                    return <Link key={i} to={`services/${service.name}`}>{service.name}</Link>
                })}
            </div>
        </div>
    )
}

export default Services