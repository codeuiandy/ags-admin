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
				</Switch>
			</Router>
		</div>
	);
}

export default App;
