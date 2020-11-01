//imports
import React, { Component } from "react";

//assets
import splash from "../../assets/homepage/arrow.svg";
//modules
//components

//style
import Style from "./style";

class SplashImg extends Component {
	render() {
		return (
			<Style className="page splash">
				<div className="mainContainer">
					<div className="yellowBar" />
					<img src={splash} className="splash" />
				</div>
			</Style>
		);
	}
}

export default SplashImg;
