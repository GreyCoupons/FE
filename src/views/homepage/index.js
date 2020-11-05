//imports
import React from "react";

//components
import DealofDay from "../../components/dealofday";
import Categories from "../../components/categories";
import NewestCodes from "../../components/newestcodes";

//style
import Style from "./style";

export default () => (
	<Style className="page homepage">
		<div className="homepage-container">
			<div className="viewheight">
				<DealofDay />
			</div>
			<Categories />
			<NewestCodes />
		</div>
	</Style>
);
