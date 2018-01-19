import React from 'react'
import Header from '../App/Header';
import BlogList from '../App/BlogList';
import Footer from './Footer';
// import {Bootstrap} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';


function App() {
    return (
        <div>
            <Header></Header>
            <BlogList></BlogList>
            <Footer></Footer>
        </div>
    )   
}

export default App
