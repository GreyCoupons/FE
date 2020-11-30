//imports
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//assets
import Logo from "../../../assets/common/GCLogo.svg";
import Heart from "../../../assets/homepage/heart.svg";
import Pepper from "../../../assets/homepage/pepper.svg";
import compass from "../../../assets/homepage/compass.svg";
import WhitePepper from "../../../assets/homepage/whitePepper.svg";
import WhiteCompass from "../../../assets/homepage/whiteCompass.svg";

//modules
//components

//style
import Style from "./style";

class MobileDashboard extends Component {
	render() {
		let { Featured, Explore } = this.props.toggled;
		return (
			<Style className="page navbar">
				<div className="dashboardContainer">
					<div className={Featured ? "selected" : "navContainer"}>
						<img src={Featured ? WhitePepper : Pepper} alt="pepper" />
						<p className={Featured ? "whiteText" : "dashboardText"}>
							Featured{" "}
						</p>
					</div>
					<div className={Explore ? "selected" : "navContainer"}>
						<img src={Explore ? WhiteCompass : compass} alt="compass" />
						<p className={Explore ? "whiteText" : "dashboardText"}>Explore</p>
					</div>
				</div>
			</Style>
		);
	}
}

export default MobileDashboard;
