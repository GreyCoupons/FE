//imports
import React, { Component } from "react";

//assets
import Splash from "../../assets/homepage/gc_mode.svg"
//modules
//components
import FeaturedProducts from "../FeaturedProducts";
import SearchBar from "../searchBar"
import SplashImg from "../splashImg"

//style
import Style from "./style";

class DealofDay extends Component {
    querySearch(item) {
        console.log(item)
    }
    render() {
        return (
            <Style className="page search">
                <div className="main fadeIn">
                    <SplashImg />
                    <SearchBar querySearch={this.querySearch} />
                    <FeaturedProducts />
                </div>
            </Style>
        );
    }
}

export default DealofDay;
