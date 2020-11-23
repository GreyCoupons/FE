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
		discountPrice: "$7.99",
		ogPrice: "$20.00",
		link: "https://amzn.to/34swNpO",
		category: "Electronics",
		image:
			"https://images-na.ssl-images-amazon.com/images/I/91o%2Bd8IiKHL._SL1500_.jpg",
	},
	{
		product: "Boots!",
		percent: "55%",
		discountPrice: "$30.00",
		ogPrice: "$70.00",
		link: "https://amzn.to/2TOHk8A",
		category: "Clothing & Shoes",
		image: "https://m.media-amazon.com/images/I/41aIdanahmL._SR400,400_.jpg",
	},
];

class NewestCodes extends Component {
	render() {
		return (
			<Style className="page search">
				<div className="main">
					<div className="newestSection">
						<p className="title2">Other Deals</p>
						<div className="line" />
					</div>
					<div className="categoryTypes">
						{displayProducts.map((type, id) => {
							return <ProductCard key={id} product={type} />;
						})}
					</div>
				</div>
			</Style>
		);
	}
}

export default NewestCodes;
