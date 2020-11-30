//imports
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//assets
import Logo from "../../../assets/common/GCLogo.svg";
import Heart from "../../../assets/homepage/heart.svg";

//modules
//components

//style
import Style from "./style";
import compass from "../../../assets/homepage/compass.svg";

class MobileDashboard extends Component {
	render() {
		return (
			<Style className="page navbar">
				<div className="dashboardContainer">
					<div className="navContainer">
						<img src={compass} alt="compass" />
						<p className="dashboardText">Featured</p>
					</div>
					<div className="navContainer">
						<img src={compass} alt="compass" />
						<p className="dashboardText">Explore</p>
					</div>
				</div>
			</Style>
		);
	}
}

export default MobileDashboard;
