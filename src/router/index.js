// imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import TopNavbar from "../components/navbar/top-navbar";
import BottomNavbar from "../components/navbar/bottom-navbar";

// pages
import Homepage from "../views/homepage";

export default () => (
	<Router>
		<TopNavbar />
		<Route path="/" exact component={Homepage} />
		{/* <Route path="/app-main/about-us" exact component={AboutUs} /> */}
		<BottomNavbar />
	</Router>
);
