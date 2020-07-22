import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/index";
import Dashboard from "./components/Dashboard/index";
import CreateEvent from './components/Events/CreateEvent'
import EventList from './components/Events/eventList'
function App() {
	return (
		<div className="App">
			<Router>
				{/* <ToastContainer /> */}
				<Switch>
					{/* <Route exact path="/" component={Login} />
					<Route exact path="/login" component={Login} /> */}
					
						{" "}
					
						<Route exact path="/dashboard" component={Dashboard} />
					

				
						<Route exact path="/create_event" component={CreateEvent} />
						<Route exact path="/event_list" component={EventList} />
						
				</Switch>
			</Router>
		</div>
	);
}

export default App;