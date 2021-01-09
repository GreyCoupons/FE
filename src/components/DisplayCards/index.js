//imports
import React, { Component } from "react"
import { BottomScrollListener } from "react-bottom-scroll-listener"

//assets
import SearchIcon from "../../assets/common/search.svg"
//modules
//components
import ProductCard from "../productcard"

//style
import Style from "./style"

class DisplayCards extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loadMore: "",
		}
	}

	render() {
		let { displayProducts } = this.props
		displayProducts.length === 0
			? console.log("empty")
			: console.log("not empty")

		return (
			<Style className="page search">
				<div className="main">
					<div className="categoryTypes">
						{displayProducts.length === 0 ? (
							<p>Sorry no results</p>
						) : (
							displayProducts.map((type, id) => {
								return <ProductCard key={id} product={type} />
							})
						)}
					</div>
				</div>
			</Style>
		)
	}
}

export default DisplayCards
