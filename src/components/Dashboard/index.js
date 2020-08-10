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
		// console.log(">>>>>", this.props.history.push("g"))
	}
	render() {

		return (
			<React.Fragment>
				<Layout RouteUserLayout={
					this.props.history
				}  page="dashboard">
			
					<div style={{marginLeft:"10px"}}>
	<UserRoute  Route="User" destination="Overview" / >
					</div>
				
				
					<OVERVIEW />
				<div id="app">

						
					<StaticticsOVERVIEW />
					<Statictics />
				</div>
				{/* <Recents /> */}
			<br/>
				</Layout>
			</React.Fragment>
		);
	}
}
