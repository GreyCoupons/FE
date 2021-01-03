//imports
import React, { Component } from "react"
import axios from "axios"
//assets
//modules
//components
import FeaturedProducts from "../DisplayCards"
import SearchBar from "../searchBar"
//style
import Style from "./style"

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
	{
		product: "Boots!",
		percent: "55%",
		discountPrice: "$30.00",
		ogPrice: "$70.00",
		link: "https://amzn.to/2TOHk8A",
		category: "Clothing & Shoes",
		image: "https://m.media-amazon.com/images/I/41aIdanahmL._SR400,400_.jpg",
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
]

class Explore extends Component {
	state = {
		exploreCoupons: [],
	}
	async componentDidMount() {
		await axios
			.post("https://greycoupon-test.herokuapp.com/coupons")
			.then((coupons) => {
				this.setState({ exploreCoupons: coupons.data.coupons })
			})
			.catch((error) => {
				// handle error
				console.log(error)
			})
	}

	render() {
		let { exploreCoupons } = this.state
		return (
			<Style className="page search">
				<div className="main fadeIn">
					<p className="title">Explore</p>
					{exploreCoupons.length === 0 ? (
						<div>Loading...</div>
					) : (
						<div className="header">
							<SearchBar />
							<FeaturedProducts displayProducts={exploreCoupons} />
						</div>
					)}
				</div>
			</Style>
		)
	}
}

export default Explore
