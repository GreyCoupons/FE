//imports
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//assets
import Logo from "../../../assets/common/GCLogo.svg";
import Heart from "../../../assets/homepage/heart.svg";

//modules
//components
import MobileDashboard from "./mobile-dashboard";
//style
import Style from "./style";

class BottomNavbar extends Component {
	render() {
		return (
			<Style className="page navbar">
				<div className="navbar-container">
					<div className="desktopView">
						<NavLink to="/" className="left-container">
							<img src={Logo} alt="Grey Coupons" className="logo" />
						</NavLink>
						<div className="right-container">
							<p to="/app-main/about-us" className="aboutUs">
								Made with <img src={Heart} alt="heart" className="heartEmoji" />{" "}
								by "the warriors three"
							</p>
						</div>
					</div>
					<div className="mobileView">
						<MobileDashboard />
					</div>
				</div>
			</Style>
		);
	}
}

export default BottomNavbar;
