//imports
import React, { Component } from "react"
import axios from "axios"
import Lottie from "react-lottie"
//assets
import Loading from "../../assets/lottie/GC-Rocket1.json"
//modules
//components
import FeaturedProducts from "../DisplayCards"
import SearchBar from "../searchBar"
import SplashImg from "../splashImg"

//style
import Style from "./style"

let displayProducts = [
	{
		product: "iPhone Lighting Cable and something long by hasbro",
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

class DealofDay extends Component {
	state = {
		featuredCoupons: [],
	}
	async componentDidMount() {
		// await axios
		// 	.post("https://greycoupon-test.herokuapp.com/get/featured")
		// 	.then((coupons) => {
		// 		this.setState({ featuredCoupons: coupons.data })
		// 	})
		// 	.catch((error) => {
		// 		// handle error
		// 		console.log(error)
		// 	})
	}
	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: Loading,
		}
		return (
			<Style className="page search">
				<div className="main fadeIn">
					{this.state.featuredCoupons.length === 0 ? (
						<Lottie options={defaultOptions} height={300} width={300} />
					) : (
						<>
							<SplashImg />
							<SearchBar />
							<div id="featuredSection">
								<FeaturedProducts
									displayProducts={this.state.featuredCoupons}
								/>
							</div>
						</>
					)}
				</div>
			</Style>
		)
	}
}

export default DealofDay
