//imports
import React, { Component } from "react";

//assets
import SearchIcon from "../../assets/common/search.svg";
//modules
//components
import CategoryBox from "../categorybox";

//style
import Style from "./style";

let displayCategories = [
	{
		category: "Beauty & Personal Care",
		categoryID: 1,
		color: "green",
	},
	{
		category: "Home & Kitchen",
		categoryID: 2,
		color: "yellow",
	},
	{
		category: "Computer & Electronics",
		categoryID: 3,
		color: "red",
	},
	{
		category: "Tools & Home Improvement",
		categoryID: 4,
		color: "purple",
	},
	{
		category: "Toys & Games",
		categoryID: 5,
		color: "green",
	},
	{
		category: "Clothing & Shoes",
		categoryID: 6,
		color: "yellow",
	},
	{
		category: "Baby Products",
		categoryID: 7,
		color: "red",
	},
];

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
					<div className="categoryTypes">
						{displayCategories.map((type, id) => {
							return (
								<CategoryBox
									key={id}
									name={type.category}
									type={type.categoryID}
									color={type.color}
								/>
							);
						})}
					</div>
					<p className="seeAll">see all</p>
				</div>
			</Style>
		);
	}
}

export default Categories;
