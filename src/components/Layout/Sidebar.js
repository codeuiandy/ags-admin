import React, { Component } from "react";
import "./layout.css";
export default class Sidebar extends Component {
	constructor(props){
		super(props)
		this.state={
			dropDown:true
		}
	}
	dropDown=(events)=>{
		let dropDown = this.state.dropDown
if (events==="events") {
	this.setState({
		dropDown:!dropDown
	})
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
						
							<li><i class="fas fa-align-justify"></i> Dashboard</li>
							<li onClick={(e)=>this.dropDown('events')}><i class="far fa-calendar-alt"></i> Events</li>
							{this.state.dropDown===true?
							
							<ul className="dropdownlist">
								<li>OverView</li>
								<li>Create Event</li>
								<li>Event List</li>
							</ul>
							:""}
							<li> <i class="fas fa-mail-bulk"></i> Posts</li>
							<li><i class="fas fa-users"></i> Users</li>
							<li><i class="far fa-comments"></i>Chats</li>
							<li> <i class="fas fa-envelope-open-text"></i>Email</li>
							<li><i class="fas fa-cogs"></i> Settings</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
