import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/index";
import Dashboard from "./components/Dashboard/index";
function App() {
	return (
		<div className="App">
			<Router>
				{/* <ToastContainer /> */}
				<Switch>
					{/* <Route exact path="/" component={Login} />
					<Route exact path="/login" component={Login} /> */}
					<Layout>
						{" "}
						<Route exact path="/dashboard" component={Dashboard} />
					</Layout>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
