import React, { Component } from "react";
import "./layout.css";

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<div className="App-header">
					<nav className="navRoutes">
						<span className="appLogo"></span>
						<div className="navItems">
							<span className="linkNav">Projects</span>
							<span className="linkNav">Hire Me</span>
							<span className="linkNav">Github</span>
							<span className="linkNav">Learn How To Code</span>
						</div>

						<div className="toggleEl">
							<i
								onClick={this.props.handleSideBar}
								className="fa fa-bars togMenu"
								aria-hidden="true"
							></i>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
