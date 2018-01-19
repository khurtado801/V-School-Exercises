import React from 'react'
import Navbar from './Navbar';
// import Images from './images';
import "./index.css";

function Header(props) {

    return (
        <div>
            <Navbar />
            <h1>Clean Blog</h1>
            <h3>A Blog Theme by Start Bootstrap</h3>
        </div>
    )
}

export default Header

function Header(props) {
    return (
    <div className="header-wrapper">
    <div className="layer">
    <Navbar></Navbar>
    <div className='title-wrapper'>
    <h1>Clean Blog</h1>
    <h3>A Blog Theme by Start Bootstrap</h3>
    </div>
    </div>
    </div>
    );
    }
