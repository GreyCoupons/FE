//imports
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
//assets
import SearchIcon from "../../assets/common/search.svg";
//modules
//components

//style
import Style from "./style";

class SearchBar extends Component {
    state = {
        search: ""
    };
    toggleSearch(e) {
        this.setState({ ...this.state, search: e.target.value })
    }
    sendSearch() {
        this.props.history.push('/api/searchResults', { query: this.state.search })
    }
    moveDoc() {
        document.getElementById("searchBarID").scrollIntoView({ behavior: "smooth" });
    }
    render() {
        return (
            <Style className="page search" style={{ width: "100%" }}>
                <div id="searchBarID" className="searchMain">
                    <input type="text" onClick={this.moveDoc.bind(this)} onChange={this.toggleSearch.bind(this)} placeholder="Search by product name or category" />
                    <div className="iconContainer" onClick={this.sendSearch.bind(this)}>
                        <img src={SearchIcon} alt="search" />
                    </div>
                </div>
            </Style>
        );
    }
}

export default withRouter(SearchBar);
