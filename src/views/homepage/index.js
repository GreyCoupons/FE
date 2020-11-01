//imports
import React from "react";

//components
import SearchBar from "../../components/searchBar";
import SplashImg from "../../components/splashImg";
import Categories from "../../components/categories";

//style
import Style from "./style";

export default () => (
	<Style className="page homepage">
		<div className="homepage-container">
			<SearchBar />
			<SplashImg />
			<Categories />
		</div>
	</Style>
);
