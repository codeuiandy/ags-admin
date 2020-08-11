import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/index";
import Dashboard from "./components/Dashboard/index";
import CreateEvent from './components/Events/CreateEvent'
import EventList from './components/Events/eventList'
import ViewEvent from './components/Events/viewEvent'
import Group from './components/Groups/group'
import AllGroup from './components/Groups/allGroups'
import './App.css'
import Plans from './components/Plan/overview'
import CreateGRP from './components/Groups/createGroup'
import PostsOverview from './components/Posts/overview'
import CreatePosts from './components/Posts/indexPost'
import ReportedPostsTable from './components/Posts/reportedPostTable'
import TopicsOverview from './components/Topics/topicsOverview'
import CreateTopic from './components/Topics/create-topics'
import AllTopics from './components/Topics/allTopics'
import UsersOverView from './components/Users/userOver'
import Allusers from './components/Users/allUsers'
import AllReportedUsers from './components/Users/allReportedUsers'
import UserInfo from './components/Users/userInfo'
import ViewGroup from './components/Groups/viewGroup'
import GroupMembers from './components/Groups/grpMembers'


function App() {
	return (
		<div className="App">
			<Router>
				{/* <ToastContainer /> */}
				<Switch>
					<Route exact path="/" component={Dashboard} />
					{/* <Route exact path="/login" component={Login} /> */}
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/create_event" component={CreateEvent} />
						<Route exact path="/event_list" component={EventList} />
						<Route exact path="/view_event" component={ViewEvent} />
						<Route exact path="/groups" component={Group} />
						<Route exact path="/create_group" component={CreateGRP} />
						<Route exact path="/all_groups" component={AllGroup} />
						<Route exact path="/plans" component={Plans} />
						<Route exact path="/posts-overview" component={PostsOverview} />
						<Route exact path="/create_posts" component={CreatePosts} />
						<Route exact path="/reported_posts_table" component={ReportedPostsTable} />
						<Route exact path="/topic_overview" component={TopicsOverview} />
						<Route exact path="/create_topic" component={CreateTopic} />
						<Route exact path="/all_topics" component={AllTopics} />
						<Route exact path="/user-overview" component={UsersOverView} />
						<Route exact path="/all_users" component={Allusers} />
						<Route exact path="/all_reported_users" component={AllReportedUsers} />
						<Route exact path="/user_info" component={UserInfo} />
						<Route exact path="/view_group" component={ViewGroup} />
						<Route exact path="/group_members" component={GroupMembers} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
