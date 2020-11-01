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
		return (
			<Style className="page categorybox">
				<div className={`${this.props.color} box`}>
					<p className="text">{this.props.name}</p>
				</div>
			</Style>
		);
	}
}

export default CategoryBox;
