import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
// import './Blog.css';

class Form extends Component {
    render () {
        return (
            <div>
            {/* <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section> */}
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={firstName} name="first name" type="text" placeholder="first name" />
                    <input onChange={this.handleChange} value={lastName} name="last name" type="text" placeholder="last name" />
                    <select onChange={this.handleChange} name="isLiving" id="isLiving" value={isLiving}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                    <select onChange={this.handleChange} name="type" id="type" value={type}>
                        <input onChange={this.handleChange} value={sith} name="sith" type="text" placeholder="Sith" />
                        <input onChange={this.handleChange} value={jedi} name="jedi" type="jedi" placeholder="Jedi" />
                    </select>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}


export default Form