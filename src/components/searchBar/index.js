//imports
import React, { Component } from "react";

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
        console.log(this.state.search)

    }
    render() {
        return (
            <Style className="page search" style={{ width: "100%" }}>
                <div className="searchMain">
                    <input type="text" onChange={this.toggleSearch.bind(this)} placeholder="Search by product name or category" />
                    <div className="iconContainer" onClick={this.sendSearch.bind(this)}>
                        <img src={SearchIcon} alt="search" />
                    </div>
                </div>
            </Style>
        );
    }
}

export default SearchBar;
