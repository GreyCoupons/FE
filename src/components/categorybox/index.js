//imports
import React, { Component } from "react";

//assets
import SearchIcon from "../../assets/common/search.svg";
//modules
//components

//style
import Style from "./style";

class CategoryBox extends Component {
	render() {
		console.log(this.props);
		return (
			<Style className="page categorybox">
				<div className="box">
					<p className="text">{this.props.name}</p>
				</div>
			</Style>
		);
	}
}

export default CategoryBox;
