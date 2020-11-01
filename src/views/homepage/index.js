//imports
import React from "react";

//components
import SearchBar from "../../components/searchBar";
import SplashImg from "../../components/splashImg";
import Categories from "../../components/categories";
import NewestCodes from "../../components/newestcodes";

//style
import Style from "./style";

export default () => (
	<Style className="page homepage">
		<div className="homepage-container">
			<div className="viewheight">
				<SearchBar />
				<SplashImg />
			</div>
			<Categories />
			<NewestCodes />
		</div>
	</Style>
);
