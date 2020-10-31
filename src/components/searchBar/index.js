//imports
import React, { Component } from "react";

//assets
import SearchIcon from "../../assets/common/search.svg";
//modules
//components

//style
import Style from "./style";

class SearchBar extends Component {
	render() {
		return (
			<Style className="page search">
				<div className="main">
					<input type="text" placeholder="search by product name or category" />
					<div className="iconContainer">
						<img src={SearchIcon} type="submit" className="searchIcon" />
					</div>
				</div>
			</Style>
		);
	}
}

export default SearchBar;
