//imports
import React, { Component } from "react"
import axios from "axios"
import Lottie from "react-lottie"
//assets
import Star from "../../assets/icons/star.svg"
import UniDog from "../../assets/lottie/uni-dog.json"

//modules
//components
import FeaturedProducts from "../DisplayCards"
import SearchBar from "../searchBar"
import SplashImg from "../splashImg"
import FeaturedItems from "../FeaturedItems"
import Loading from "../Loading"
//style
import Style from "./style"

class DealofDay extends Component {
	state = {
		featuredCoupons: [],
	}
	async componentDidMount() {
		await axios
			.post("https://greycoupon-test.herokuapp.com/get/featured")
			.then((coupons) => {
				this.setState({ featuredCoupons: coupons.data })
			})
			.catch((error) => {
				// handle error
				console.log(error, "sorry something went wrong.")
			})
	}
	render() {
		const defaultOptions = {
			loop: false,
			autoplay: true,
			animationData: UniDog,
		}
		return (
			<Style className="page search">
				<div className="main">
					{this.state.featuredCoupons.length === 0 ? (
						<Loading />
					) : (
						<>
							<Lottie options={defaultOptions} height={200} width={200} />
							<div className="row">
								<img src={Star} alt="star" className="star" />
								<p className="title">Featured</p>
								<img src={Star} alt="star" className="star" />
							</div>
							{/* <FeaturedItems /> */}
							{/* <SplashImg /> */}
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
