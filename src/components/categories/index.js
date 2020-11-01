//imports
import React, { Component } from "react";

//assets
import SearchIcon from "../../assets/common/search.svg";
//modules
//components

//style
import Style from "./style";

class Categories extends Component {
	render() {
		return (
			<Style className="page search">
				<div className="main">
					<p className="title">Explore</p>
					<div className="categorySection">
						<p className="title2">Categories</p>
						<div className="line" />
					</div>
				</div>
			</Style>
		);
	}
}

export default Categories;
