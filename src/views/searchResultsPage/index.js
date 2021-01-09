//imports
import React from "react"
import axios from "axios"
//components
import Results from "../../components/DisplayCards"
import SearchBar from "../../components/searchBar"

//style
import Style from "./style"

// Test API
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

class SearchResults extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			results: [],
			loading: false,
			searchQuery: "",
		}
	}
	componentDidMount = async () => {
		let { query } = await this.props.location.state

		console.log(query, "QUERY")
		if (query.coupons_found === 0) {
			this.setState({ searchQuery: "No Results" })
		}
		if (query.coupons_found >= 1) {
			this.setState({ searchQuery: "coupons!", results: query.coupons })
		}
	}
	render() {
		return (
			<Style className="page homepage">
				<div className="homepage-container">
					<div className="mobileView">
						{this.state.query !== "" ? (
							<>
								<SearchBar />
								<Results displayProducts={this.state.results} />
							</>
						) : (
							<p>sorry no results</p>
						)}
					</div>
				</div>
			</Style>
		)
	}
}

export default SearchResults
