//imports
import React, { Component } from "react"
import axios from "axios"
import Lottie from "react-lottie"
//assets
import shoppingCart from "../../assets/icons/shopping-cart.svg"
import Loading from "../Loading"
//modules
//components
import FeaturedProducts from "../DisplayCards"
import SearchBar from "../searchBar"
//style
import Style from "./style"

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
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: Loading,
		}
		let { exploreCoupons } = this.state
		return (
			<Style className="page search">
				<div className="main">
					{exploreCoupons.length === 0 ? (
						<Loading />
					) : (
						<div className="header">
							<div className="row">
								<img
									src={shoppingCart}
									alt="shopping Cart"
									className="shoppingCart"
									style={{ margin: "0 29px 0 15px" }}
								/>
								<p className="title">Explore</p>
								<img
									src={shoppingCart}
									alt="shopping Cart"
									className="shoppingCart"
								/>
							</div>
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
