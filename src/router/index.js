// imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// pages
import Homepage from "../views/homepage";

export default () => (
	<Router>
		<Route path="/" exact component={Homepage} />
		{/* <Route path="/app-main/about-us" exact component={AboutUs} /> */}
	</Router>
);
