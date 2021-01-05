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
        return (
            <Style className="page search">
                <div className="main">
                    {this.state.featuredCoupons.length === 0 ? (
                        <Loading />
                    ) : (
                            <>
                                <SplashImg />
                                <SearchBar />
                                <div id="featuredSection">
                                    <div className="row">
                                        <p className="title">Featured</p>
                                        <img src={Star} alt="star" className="star" />
                                    </div>
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
