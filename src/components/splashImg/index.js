//imports
import React, { Component } from "react";

//assets
import splash from "../../assets/homepage/arrow.svg";
//modules
//components

//style
import Style from "./style";

const executeScroll = () => {
	window.scrollTo({
		top: 900,
		behavior: "smooth",
	});
};

class SplashImg extends Component {
	render() {
		return (
			<Style className="page splash">
				<div className="mainContainer">
					<div className="yellowBar" />
					<img src={splash} className="splash" onClick={executeScroll} />
				</div>
			</Style>
		);
	}
}

export default SplashImg;
