import React, { Component } from "react";
import "./index.css";
import OVERVIEW from "./overview";
import StaticticsOVERVIEW from "./staticticsOverview";
import Statictics from "./statictics";
import Recents from "./recents";
import Layout from '../Layout/index'
export default class index extends Component {
	render() {
		return (
			<React.Fragment>
				<Layout page="dashboard">
				<div className="headerDashBoard">
					<h1>
						User <span>Overview</span>
					</h1>
				</div>

				<div id="app">
					<OVERVIEW />
					<StaticticsOVERVIEW />
					<Statictics />
				</div>
				<Recents />
				</Layout>
			</React.Fragment>
		);
	}
}
