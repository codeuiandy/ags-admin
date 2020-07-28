import React, { Component } from "react";
import "./layout.css";
import {Link } from 'react-router-dom'
export default class Sidebar extends Component {
	constructor(props){
		super(props)
		this.state={
			dropDownEvent:false,
			dropDownGroup:false
		}
		console.log(this.props)
	}
	dropDown=(events)=>{
		let dropDownEvent = this.state.dropDownEvent
		let dropDownGroup = this.state.dropDownGroup
if (events==="events") {
	this.setState({
		dropDownEvent:!dropDownEvent,
		dropDownGroup:false
	})	
}

if (events==="groups") {
	this.setState({
		dropDownGroup:!dropDownGroup,
		dropDownEvent:false,
		
	})	
}


	}
	componentDidMount(){
		if (this.props.samePaged === "keepOpen") {
			this.setState({
				dropDownGroup:true
			})
			console.log(this.props)
		}
		
		if (this.props.samePage === "keepOpen") {
			this.setState({
				dropDownGroup:true
			})
			console.log(this.props)
		}
	}
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
						
							<li className={`${this.props.page==="dashboard"?"activeClass":""}`}><i class="fas fa-align-justify">
								</i><Link className={`${this.props.page==="dashboard"?"activeClass":""}`} to="/dashboard">Dashboard</Link> </li>
							<li onClick={(e)=>this.dropDown('events')}><i class="far fa-calendar-alt"></i> Events</li>
							{this.state.dropDownEvent===true?
							
							<ul className="dropdownlist">
								<li >OverView</li>
								<li className={`${this.props.page==="create-event"?"activeClass":""}`}>
								<Link className={`${this.props.page==="create-event"?"activeClass":""}`} to="/create_event">
									Create Event</Link></li>
								<li className={`${this.props.page==="event-list"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="event-list"?"activeClass":""}`} to="/event_list">
									Event List</Link></li>
							</ul>
							:""}

<li onClick={(e)=>this.dropDown('groups')}><i class="far fa-calendar-alt"></i> Groups</li>
							{this.state.dropDownGroup===true?
							
							<ul className="dropdownlist">
								
								<li className={`${this.props.page==="create-event"?"activeClass":""}`}>
								<Link className={`${this.props.page==="groups-overview"?"activeClass":""}`} to="/groups">
									Group OverView</Link></li>
								<li className={`${this.props.page==="event-list"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="all_groups"?"activeClass":""}`} to="/all_groups">
									Groups</Link></li>
							</ul>
							:""}
<li className={`${this.props.page === "planss" ? "activeClass"  : ""}`}> <i class="fas fa-mail-bulk"></i> <Link className={`${this.props.page === "planss" ? "activeClass"  : ""}`} to="plans">Plans</Link></li>
							
							<li className={`${this.props.page==="posts"?"activeClass":""}`}> <i class="fas fa-mail-bulk"></i> Posts</li>
							<li className={`${this.props.page==="users"?"activeClass":""}`}><i class="fas fa-users"></i> Users</li>
							<li className={`${this.props.page==="chats"?"activeClass":""}`}><i class="far fa-comments"></i>Chats</li>
							<li className={`${this.props.page==="email"?"activeClass":""}`}> <i class="fas fa-envelope-open-text"></i>Email</li>
							<li className={`${this.props.page==="settings"?"activeClass":""}`}><i class="fas fa-cogs"></i> Settings</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
