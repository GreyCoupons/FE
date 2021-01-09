//imports
import React, { Component } from "react"
import Lottie from "react-lottie"
import { withRouter } from "react-router-dom"
//assets
import LoadingShip from "../../assets/lottie/GC-Rocket1.json"

//style
import Style from "./style"

class Loading extends Component {
	componentDidMount = async () => {
		console.log(this.props.location)
		if (this.props.location.state !== undefined) {
			let { query } = await this.props.location.state
			this.props.history.push("/api/searchResults", {
				query: query,
			})
		}
	}

	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: LoadingShip,
		}
		return (
			<Style className="page search">
				<div className="main fadeIn">
					<Lottie options={defaultOptions} height={300} width={300} />
					<section id="version2">
						Loading<span class="one">.</span>
						<span class="two">.</span>
						<span class="three">.</span>
					</section>
				</div>
			</Style>
		)
	}
}

export default withRouter(Loading)
