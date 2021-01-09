// imports
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//components
import TopNavbar from "../components/navbar/top-navbar"
import BottomNavbar from "../components/navbar/bottom-navbar"

// pages
import Homepage from "../views/homepage"
import SearchResults from "../views/searchResultsPage"
import AboutUs from "../views/AboutUs"
import LoadingSCreen from "../components/Loading"
class Navigation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			view: "featured",
		}
	}

	toggleView = (toggleView) => {
		this.setState({ view: toggleView })
	}

	render() {
		return (
			<Router>
				<TopNavbar />
				<div>
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => (
								<Homepage
									{...props}
									toggleView={this.toggleView}
									view={this.state.view}
								/>
							)}
						/>
						<Route path="/api/searchResults" exact component={SearchResults} />
						<Route path="/aboutus" exact component={AboutUs} />
						<Route path="/loading" exact component={LoadingSCreen} />
					</Switch>
				</div>
				<BottomNavbar
					style={{ position: "relative" }}
					toggleView={this.toggleView}
					view={this.state.view}
				/>
			</Router>
		)
	}
}

export default Navigation
