import React, { Component } from "react";
import "./index.css";

export default class overview extends Component {
	render() {
		return (
			<div>
				<div className="dashbordOverview">
					<span className="overviewWrap">
						<h1>80</h1>
						<span>New Registers. </span>
						<span>120 members</span>
						<hr />
					</span>
					<span className="overviewWrap">
						<h1>80</h1>
						<span>New Events</span>
						<span>52 Events</span>
						<hr />
					</span>
					<span className="overviewWrap">
						<h1>80</h1>
						<span>Opportunities</span>

						<hr />
					</span>
				</div>
			</div>
		);
	}
}
