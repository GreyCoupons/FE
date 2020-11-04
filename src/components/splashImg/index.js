//imports
import React, { Component } from "react";

//assets
import gc_mode from "../../assets/homepage/gc_mode.svg";
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
					<img src={gc_mode} className="splash" onClick={executeScroll} />
				</div>
			</Style>
		);
	}
}

export default SplashImg;
