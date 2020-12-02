//imports
import React, { Component } from "react";

//assets
//modules
//components
import FeaturedProducts from "../FeaturedProducts";

//style
import Style from "./style";

class DealofDay extends Component {
	render() {
		return (
			<Style className="page search">
				<div className="main">
					<div className="header">
						<p className="title">Featured Items</p>
					</div>
					<FeaturedProducts />
					{/*<div className="infoContainer">
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
