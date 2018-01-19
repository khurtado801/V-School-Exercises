import React from 'react';
import BlogList from "../../BlogList";

function BlogPost(props) {
    return (
        <div>
            <h1 className='title'>{props.title}</h1>
            <h2 className='subtitle'>{props.subtitle}</h2>
            <p className='date'>Posted by <span className='start-bootstrap'>Start Bootstrap</span> on <span>{props.date}</span></p>
        </div>
    )
}

export default BlogPost
