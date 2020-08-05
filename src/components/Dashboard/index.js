import React, { Component } from "react";
import "./index.css";
import OVERVIEW from "./overview";
import StaticticsOVERVIEW from "./staticticsOverview";
import Statictics from "./statictics";
import Recents from "./recents";
import Layout from '../Layout/index'
import UserRoute from '../UserRoute/Route'
export default class index extends Component {
	constructor(props){
		super(props)
		this.state={
		isVisible :true
		}
	}
	render() {

		return (
			<React.Fragment>
				<Layout page="dashboard">
			
					<div style={{marginLeft:"10px"}}>
	<UserRoute  Route="User" destination="Overview" />
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
