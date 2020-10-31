//imports
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//assets
import Logo from "../../../assets/common/GCLogo.svg";

//modules
//components

//style
import Style from "./style";

class TopNavbar extends Component {
	render() {
		return (
			<Style className="page navbar">
				<div className="navbar-container">
					<div className="left-container">
						<img src={Logo} alt="Grey Coupons" className="logo" />
					</div>
					<div className="right-container">
						<NavLink
							to="/app-main/about-us"
							// activeStyle={{
							// 	borderRadius: "4px",
							// 	backgroundColor: "#69C8FF",
							// 	color: "#313232",
							// }}
							className="aboutUs"
						>
							About Us
						</NavLink>
					</div>
				</div>
			</Style>
		);
	}
}

export default TopNavbar;
