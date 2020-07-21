import React, { Component } from "react";
import "./layout.css";
export default class Sidebar extends Component {
	render() {
		return (
			<div>
				<div
					className={`${
						this.props.sidebarShow === "showSidebar"
							? "showSidebar"
							: "hideSidebar"
					} ${this.props.SidebarDefault}`}
				>
					<div className={`sidebar`}>
						<ul className="sidebarList">
							<li>Youtube Channel</li>
							<li>Dynamic Button With React.js</li>
							<li>Build A Full Mordern-Day Website</li>
							<li>Css Form Dark Mode Enabled</li>
							<li>HTML For Beginners</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
