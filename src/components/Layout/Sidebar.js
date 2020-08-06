import React, { Component } from "react";
import "./layout.css";
import {Link } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';
export default class Sidebar extends Component {
	constructor(props){
		super(props)
		this.state={
			dropDownEvent:false,
			dropDownGroup:false,
			dropDownPosts:false,
			dropDownTopics:false,
			dropDownUsers:false
		}
		console.log(this.props)
		
		
	}
	dropDown=(events)=>{
		let dropDownEvent = this.state.dropDownEvent
		let dropDownGroup = this.state.dropDownGroup
if (events==="events") {
	this.setState({
		dropDownEvent:!dropDownEvent,
		dropDownGroup:false,
		dropDownPosts:false,
		dropDownTopics:false,
			dropDownUsers:false
	})	
}

if (events==="groups") {
	this.setState({
		dropDownGroup:!dropDownGroup,
		dropDownEvent:false,
		dropDownPosts:false,
		dropDownTopics:false,
		dropDownUsers:false
		
	})
}

if (events==="posts") {
	this.setState({
		dropDownPosts:!this.state.dropDownPosts,
		dropDownEvent:false,
		dropDownGroup:false,
		dropDownTopics:false,
		dropDownUsers:false
		
	})	
}

if (events==="topics") {
	this.setState({
		dropDownTopics:!this.state.dropDownTopics,
		dropDownEvent:false,
		dropDownGroup:false,
		dropDownUsers:false
		
	})	
}


if (events==="users") {
	this.setState({
		dropDownEvent:false,
		dropDownGroup:false,
		dropDownUsers:!this.state.dropDownUsers
		
	})	
}


	}

	
	componentDidMount(){
		
		if (this.props.activepage === "keepOpenEvents") {
			this.setState({
dropDownEvent:true,
			})
			
		}

		if (this.props.activepage === "keepOpenGroup") {
			this.setState({
				dropDownGroup:true,
				
			})
			
		}

		if (this.props.activepage === "keepOpenPosts") {
			this.setState({
			
				dropDownPosts:true,
			
			})
			
		}

		if (this.props.activepage === "keepOpenTopics") {
			this.setState({
			
			
				dropDownTopics:true,
			})
			
		}


		if (this.props.activepage === "keepOpenUsers") {
			this.setState({
			
			
				dropDownUsers:true,
			})
			
		}

		if (this.props.activepage === "allUsers") {
			this.setState({
			
			
				dropDownUsers:true,
			})
			
		}
		
		
		if (this.props.activepage === "reportedUsers") {
			this.setState({
			
			
				dropDownUsers:true,
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
					<Scrollbars style={{ width: 224, height: "100vh "}}
					autoHide
					autoHideTimeout={1000}
					autoHideDuration={200}
					>
						<ul className="sidebarList">
						<div onClick={()=>{
									this.props.RouteUserLayout.push("/dashboard")
								}} className="hoverActiveRoute"></div>
							<li  className={`${this.props.page==="dashboard"?"activeClass":""}`}><i class="fas fa-th">
								
								</i><Link className={`${this.props.page==="dashboard"?"activeClass":""}`} to="/dashboard">Dashboard</Link> </li>

								<div onClick={(e)=>this.dropDown('events')} className="hoverActiveRoute"></div>
							<li ><i class="far fa-calendar-alt"></i> Events</li>
							{this.state.dropDownEvent===true?
							
							<ul className="dropdownlist">
								
								<div onClick={()=>{
									// this.props.RouteUserLayout.push("")
								}} className="hoverActiveRoute"></div>
								<li >OverView</li>
								<li className={`${this.props.page==="create-event"?"activeClass":""}`}>

								<div onClick={()=>{
									this.props.RouteUserLayout.push("/create_event")
								}} className="hoverActiveRoute"></div>

								<Link className={`${this.props.page==="create-event"?"activeClass":""}`} to="/create_event">
									Create Event</Link></li>

									<div onClick={()=>{
									this.props.RouteUserLayout.push("/event_list")
								}} className="hoverActiveRoute"></div>
								<li className={`${this.props.page==="event-list"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="event-list"?"activeClass":""}`} to="/event_list">
									Event List</Link></li>
							</ul>
							:""}
<div onClick={(e)=>this.dropDown('groups')} className="hoverActiveRoute"></div>
<li ><i class="fas fa-users"></i> Groups</li>
							{this.state.dropDownGroup===true?
							
							<ul className="dropdownlist">
								

								<div onClick={()=>{
									this.props.RouteUserLayout.push("/groups")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="create-event"?"activeClass":""}`}>
								<Link className={`${this.props.page==="groups-overview"?"activeClass":""}`} >
									Group Overview</Link></li>

									<div onClick={()=>{
									this.props.RouteUserLayout.push("/all_groups")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="event-list"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="all_groups"?"activeClass":""}`} to="/all_groups">
									Groups</Link></li>
							</ul>
							:""}

<div onClick={(e)=>this.dropDown('posts')} className="hoverActiveRoute"></div>
<li ><i class="fas fa-vote-yea"></i> Posts</li>
							{this.state.dropDownPosts===true?
							
							<ul className="dropdownlist">
								
								<div onClick={()=>{
									this.props.RouteUserLayout.push("/posts-overview")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="postOverview"?"activeClass":""}`}>
								<Link className={`${this.props.page==="postOverview"?"activeClass":""}`} to="/posts-overview">
									Overview</Link></li>

									<div onClick={()=>{
									this.props.RouteUserLayout.push("/create_posts")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="create_posts"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="create_posts"?"activeClass":""}`} to="/create_posts">
									Create Post</Link></li>

									<div onClick={()=>{
									this.props.RouteUserLayout.push("/reported_posts_table")
								}} className="hoverActiveRoute"></div>

									<li className={`${this.props.page==="reported_posts_table"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="reported_posts_table"?"activeClass":""}`} to="/reported_posts_table">
									Reported Post</Link></li>
									
							</ul>
							:""}			

<div onClick={(e)=>this.dropDown('topics')} className="hoverActiveRoute"></div>
<li ><i class="fas fa-calendar-week"></i>Topics</li>
							{this.state.dropDownTopics === true?
							
							<ul className="dropdownlist">
								<div onClick={()=>{
									this.props.RouteUserLayout.push("/topic_overview")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="create-event"?"activeClass":""}`}>
								<Link className={`${this.props.page==="groups-overview"?"activeClass":""}`} to="/topic_overview">
									Overview</Link></li>

									<div onClick={()=>{
									this.props.RouteUserLayout.push("/create_topic")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="create_topic"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="create_topic"?"activeClass":""}`} to="/create_topic">
									Create Topic</Link></li>

									<div onClick={()=>{
									this.props.RouteUserLayout.push("/all_topics")
								}} className="hoverActiveRoute"></div>
									<li className={`${this.props.page==="all_topics"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="all_topics"?"activeClass":""}`} to="/all_topics">
									Topics</Link></li>
									
							</ul>
							:""}	


<div onClick={(e)=>this.dropDown('users')} className="hoverActiveRoute"></div>
							<li ><i class="fas fa-users"></i>Users</li>
							{this.state.dropDownUsers === true?
							
							<ul className="dropdownlist">
								<div onClick={()=>{
									this.props.RouteUserLayout.push("/user-overview")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="usersOverview" ? "activeClass":""}`}>
								<Link className={`${this.props.page==="usersOverview"?"activeClass":""}`} to="/user-overview">
									Users Overview</Link></li>

                                
									<div onClick={()=>{
									this.props.RouteUserLayout.push("/all_users")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="allUsers" ? "activeClass":""}`}>
								<Link className={`${this.props.page==="allUsers"?"activeClass":""}`} to="/all_users">
									All Users</Link></li>

									<div onClick={()=>{
									this.props.RouteUserLayout.push("/all_reported_users")
								}} className="hoverActiveRoute"></div>
								<li className={`${this.props.page==="reportedUsers"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="reportedUsers"?"activeClass":""}`} to="/all_reported_users">
									Reported Users</Link></li>
									
									
							</ul>
							:""}		
<div className={`${this.props.page==="chats"?"activeClass":""}`} className="hoverActiveRoute"></div>
              	<li ><i class="far fa-comments"></i>Chats</li>

				  <div className="hoverActiveRoute"></div>
							<li className={`${this.props.page==="email"?"activeClass":""}`}> <i class="fas fa-envelope-open-text"></i>Email</li>

							<div className="hoverActiveRoute"></div>
							<li className={`${this.props.page==="settings"?"activeClass":""}`}><i class="fas fa-cogs"></i> Settings</li>
						</ul>
						</Scrollbars>
					</div>
				</div>
			</div>
		);
	}
}
