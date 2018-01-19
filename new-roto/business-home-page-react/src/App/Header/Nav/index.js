import React, { Component } from 'react';
import "./index.css"

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<div className="navBar">
					<div class="navbar navbar-default navbar-fixed-top" role="navigation">
						<div class="container">
							<div class="navColor">
								<div class="navbar-header">
									<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
										<div className="navBurg">
										<span class="sr-only">Toggle navigation</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										</div>
										</button>
									<a class="navbar-brand" href="#">NavBar</a>
								</div>
								<div class="navbar-collapse collapse">
									<ul class="nav navbar-nav navbar-right">
										<li><a href="#">Home</a></li>
										<li><a href="#">About</a></li>
										<li><a href="#">Contact</a></li>
									</ul>
								</div>
								</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};
export default Nav;