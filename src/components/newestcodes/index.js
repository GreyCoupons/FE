//imports
import React, { Component } from "react";

//assets
import SearchIcon from "../../assets/common/search.svg";
//modules
//components
import ProductCard from "../../components/productcard";

//style
import Style from "./style";

let displayProducts = [
	{
		product: "iPhone Lighting Cable",
		percent: "74%",
		link: "https://amzn.to/34swNpO",
		category: "Electronics",
	},
];

class NewestCodes extends Component {
	render() {
		return (
			<Style className="page search">
				<div className="main">
					<div className="newestSection">
						<p className="title2">Newest Codes</p>
						<div className="line" />
					</div>
					<div className="categoryTypes">
						{displayProducts.map((type, id) => {
							return <ProductCard key={id} product={type} />;
						})}
					</div>
					<p className="seeAll">see all</p>
				</div>
			</Style>
		);
	}
}

export default NewestCodes;
