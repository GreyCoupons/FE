//imports
import React, { Component } from "react"
import axios from "axios"
import Lottie from "react-lottie"
//assets
import Star from "../../assets/icons/star.svg"
//modules
//components
import FeaturedProducts from "../DisplayCards"
import SearchBar from "../searchBar"
import SplashImg from "../splashImg"
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
		return (
			<Style className="page search">
				<div className="main"></div>
			</Style>
		)
	}
}

export default DealofDay
