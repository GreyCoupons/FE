// imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import TopNavbar from "../components/navbar/top-navbar";
import BottomNavbar from "../components/navbar/bottom-navbar";

// pages
import Homepage from "../views/homepage";

class Navigation extends React.Component {
    state = {
        view: "featured",
    }

    toggleView = (toggleView) => {
        this.setState({ view: toggleView })
    }
    render() {
        return (
            <Router>
                <TopNavbar />
                <Route
                    path='/'
                    render={(props) => (
                        <Homepage {...props} toggleView={this.toggleView} view={this.state.view} />
                    )}
                />
                {/* <Route path="/app-main/about-us" exact component={AboutUs} /> */}
                <BottomNavbar toggleView={this.toggleView} view={this.state.view} />
            </Router>
        )
    }
}

export default Navigation