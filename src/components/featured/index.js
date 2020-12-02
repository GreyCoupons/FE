//imports
import React, { Component } from "react";

//assets
//modules
//components
import CategoryBox from "../categorybox";

//style
import Style from "./style";

let displayProducts = [
	{
		product: "iPhone Lighting Cable",
		percent: "74%",
		link: "https://amzn.to/34swNpO",
		category: "Electronics",
		image:
			"https://images-na.ssl-images-amazon.com/images/I/91o%2Bd8IiKHL._SL1500_.jpg",
	},
	{
		product: "Boots!",
		percent: "55%",
		link: "https://amzn.to/2TOHk8A",
		category: "Clothing & Shoes",
		image: "https://m.media-amazon.com/images/I/41aIdanahmL._SR400,400_.jpg",
	},
];

class DealofDay extends Component {
	render() {
		return (
			<Style className="page search">
				<div className="main">
					<p className="title">Deal of the Day</p>
					{/* <div className="line" />
					<div className="infoContainer">
						<div className="leftContainer">
							<div className="categorySection">
								<p className="title2">{displayProducts[0].product}</p>
								<div className="productInformationContainer">
									<div className="row">
										<p className="discountedPrice">$6.99</p>
										<p className="currentPrice">$20.00</p>
										<p className="percentOff">
											{displayProducts[0].percent} Off
										</p>
									</div>
									<p className="productInfo">
										Certified: Cable and uses original connector , You won't see
										a "Not Compatible" warning sign with our trusted
										cables,Nylon fiber cloth - The high quality nylon fiber
										cloth is wound tightly around the Ulimag 8pin cord to
										withstand day-to-day wear and tear whilst at the same time
										keeping it flexible and tangle-free.
									</p>
								</div>
							</div>
							<div className="buttonContainer">
								<button>Learn More</button>
							</div>
						</div>
						<div className="imgContainer">
							<img src={displayProducts[0].image} className="productImg" />
						</div>
					</div> */}
				</div>
			</Style>
		);
	}
}

export default DealofDay;
