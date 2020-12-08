//imports
import React, { Component } from "react";

//assets
import SearchIcon from "../../assets/common/search.svg";
//modules
//components

//style
import Style from "./style";

class SearchBar extends Component {
    render() {
        return (
            <Style className="page search" style={{ width: "100%" }}>
                <div className="main">
                    <input type="text" placeholder="Search by product name or category" />
                    {/* <div className="iconContainer"> */}
                    {/* <img src={SearchIcon} type="submit"  /> */}
                    {/* </div> */}
                </div>
            </Style>
        );
    }
}

export default SearchBar;
