import React, { Component } from 'react';
import "./index.css"

// function Nav(props) {
//     return (
//         <div className="nav-wrapper">
//             {props.links.map((link, index) => {
//                 return <a key={index} href={link.href}>{link.name}</a>
//             })}
//         </div>
//     )
// }

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<a href="/home">Home</a>
						<a href="/about">About</a>
						<a href="/contact">Contact</a>
					</div>
				</div>

			</nav>
		);
	}
};

export default Nav;