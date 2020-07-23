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
							<span className="linkNav"><i class="fas fa-bell"></i></span>
							
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
