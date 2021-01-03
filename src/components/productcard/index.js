//imports
import React, { Component } from "react"

//assets
import SearchIcon from "../../assets/common/search.svg"
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
		console.log(this.props.product)
		let {
			title,
			link,
			category,
			imageAddress,
			discount,
			price,
		} = this.props.product

		let percent = (discount / price) * 100
		percent = 100 - Math.round(percent)

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
										<p className="productTextDiscounted">{discount}</p>
										<p className="productTextogPrice">{price}</p>
									</div>
									<div className="percentContainerEnd">
										<p className="percent">-{percent}% </p>
									</div>
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
