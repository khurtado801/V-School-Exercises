import React, { Component } from 'react'
// import { Link } from 'react-router';
import "./index.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }

    render() {
        const style = {
             position: "absolute",
             borderBottom: "1px, solid, #e9ecef",
             backgroundColor: "#fff",
             fontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
         }

        return (
        <div style={style}>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="index.html">Start Bootstrap</a>
                    <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i class="fa fa-bars"></i>
                    </button>
                <div class="navbar-collapse collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="post.html">Sample Post</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <p class="textHelperPosition"><strong>***COLUMN***</strong></p>
                </div>
                <p class="textHelperPosition"><strong>***CONTAINER***</strong></p>
            </div>
        </nav>
    </div>
        )
    }
}

export default Navbar