//imports
import React, { Component } from "react"
import Ratings from "./rating"
//assets
import VendorIcon from "../../assets/common/AmazonIcon.png"
//modules
//components

//style
import Style from "./style"

class CategoryBox extends Component {
	state = { color: "" }
	componentDidMount() {
		let { category } = this.props.product
		if (category === "Clothing & Shoes") {
			this.setState({ color: "yellow" })
		}
		if (category === "Electronics") {
			this.setState({ color: "red" })
		}
	}
	render() {
		let {
			title,
			link,
			category,
			imageAddress,
			discount,
			price,
			rating,
		} = this.props.product

		let percent = 100 - Math.round((discount / price) * 100)

		return (
			<Style className="page categorybox">
				<div className={` box`}>
					<a
						href={link}
						rel="noopener"
						target="_blank"
						className="linkRedirect"
					>
						{/* <div className={`${color}`}>
							{" "}
							<p>{category}</p>{" "}
						</div> */}
						<div className="imgContainer">
							<img src={VendorIcon} className="vendorIcon" alt="Amazon Icon" />
							<img
								src={imageAddress}
								className="productImg"
								alt={`product: ${title}`}
							/>
						</div>
						<div className="bottomContainer">
							<div className="titleContainer">
								<p className="productText">{title}</p>
								<div className="percentContainer">
									<div className="prductPriceDiv">
										<p className="productTextDiscounted">${discount}</p>
										<p className="productTextogPrice">${price}</p>
									</div>
								</div>
								<div className="row">
									{/* <div className="percentContainerEnd"> */}
									<p className="percent">-{percent}% </p>
									{/* </div> */}
									<Ratings rating={rating} />
								</div>
							</div>
						</div>
					</a>
				</div>
			</Style>
		)
	}
}

export default CategoryBox
