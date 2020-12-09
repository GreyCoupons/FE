// imports
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'

//components
import TopNavbar from "../components/navbar/top-navbar";
import BottomNavbar from "../components/navbar/bottom-navbar";

// pages
import Homepage from "../views/homepage";
import SearchResults from "../views/searchResultsPage"

const history = createHistory()

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
                            exact path='/'
                            render={(props) => (
                                <Homepage {...props} toggleView={this.toggleView} view={this.state.view} />
                            )}
                        />
                        <Route path='/api/searchResults' exact component={SearchResults} />
                        {/* <Route path="/app-main/about-us" exact component={AboutUs} /> */}
                    </Switch>
                </div>
                <BottomNavbar toggleView={this.toggleView} view={this.state.view} />
            </Router>
        )
    }
}

export default Navigation