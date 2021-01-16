//imports
import React from "react"
import Lottie from "react-lottie"
//components
import Results from "../../components/DisplayCards"
import SearchBar from "../../components/searchBar"
import Geekbears from "../../assets/lottie/geekbears.json"
//style
import Style from "./style"

class SearchResults extends React.Component {
	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: Geekbears,
		}
		return (
			<Style className="page homepage">
				<div className="aboutusContainer">
					<Lottie
						className="lottie-Geekbears"
						options={defaultOptions}
						height={300}
						width={300}
					/>
					<div className="textBox">
						<p className="text">
							We are three developers whose goal is to build ways to solve
							common problems, and help people by building apps like this.
						</p>
					</div>
					<div className="textBox">
						<p className="text">
							For inquiries:{" "}
							<a href="mailto:greycouponsteam@gmail.com">
								greycouponsteam@gmail.com
							</a>{" "}
						</p>
					</div>
				</div>
			</Style>
		)
	}
}

export default SearchResults
