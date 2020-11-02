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
		let { product, percent, link, category } = this.props.product;
		console.log(this.props);
		return (
			<Style className="page categorybox">
				<div className={` box`}>
					<a href={link} target="_blank" className="linkRedirect">
						<div className={`${category}`}>
							{" "}
							<p>{category}</p>{" "}
						</div>
						<img
							src="https://images-na.ssl-images-amazon.com/images/I/91o%2Bd8IiKHL._SL1500_.jpg"
							className="productImg"
						/>
						<div className="bottomContainer">
							<div className="titleContainer">
								<p className="text">{product}</p>
								<div className="percentContainer">
									<p className="percent">{percent} </p>
									<p className="off">OFF </p>
								</div>
							</div>
						</div>
					</a>
				</div>
			</Style>
		);
	}
}

export default CategoryBox;
