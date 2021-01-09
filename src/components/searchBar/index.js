//imports
import React, { Component } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"
//assets
import SearchIcon from "../../assets/common/search.svg"
//modules
//components

//style
import Style from "./style"

class SearchBar extends Component {
	state = {
		search: "",
	}
	toggleSearch(e) {
		this.setState({ ...this.state, search: e.target.value })
	}

	sendSearch = async () => {
		// Sends search query to backend to look for products and send to state
		await axios
			.post("https://greycoupon-test.herokuapp.com/coupons", {
				title: this.state.search,
			})
			.then((coupons) => {
				console.log(coupons)
				this.setState({ search: "" })

				this.props.history.push("/loading", {
					query: coupons.data,
				})

				// this.props.history.push("/api/searchResults", {
				// 	query: coupons.data,
				// })
			})
			.catch((error) => {
				// handle error
				console.log("NONe")
			})
	}
	moveDoc() {
		document
			.getElementById("searchBarID")
			.scrollIntoView({ alignTo: true, behavior: "smooth", block: "start" })
	}
	render() {
		return (
			<Style className="page search" style={{ width: "100%" }}>
				<div id="searchBarID" className="searchMain">
					<label
						for="searchBar"
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							width: "100%",
							justifyContent: "center",
						}}
					>
						<input
							id="searchBar"
							type="text"
							OnTouchStart={this.moveDoc.bind(this)}
							onClick={this.moveDoc.bind(this)}
							onChange={this.toggleSearch.bind(this)}
							placeholder="Search by product name or category"
						/>
						<div className="iconContainer" onClick={this.sendSearch.bind(this)}>
							<img src={SearchIcon} alt="search" />
						</div>
					</label>
				</div>
			</Style>
		)
	}
}

export default withRouter(SearchBar)
