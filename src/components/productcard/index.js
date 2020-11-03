//imports
import React, { Component } from "react";

//assets
import SearchIcon from "../../assets/common/search.svg";
//modules
//components

//style
import Style from "./style";

class CategoryBox extends Component {
	state = { color: "" };
	componentDidMount() {
		let { category } = this.props.product;
		if (category === "Clothing & Shoes") {
			this.setState({ color: "yellow" });
		}
		if (category === "Electronics") {
			this.setState({ color: "red" });
		}
	}
	render() {
		let { product, percent, link, category, image } = this.props.product;
		let { color } = this.state;
		return (
			<Style className="page categorybox">
				<div className={` box`}>
					<a href={link} target="_blank" className="linkRedirect">
						<div className={`${color}`}>
							{" "}
							<p>{category}</p>{" "}
						</div>
						<div className="imgContainer">
							<img src={image} className="productImg" />
						 </div>
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
