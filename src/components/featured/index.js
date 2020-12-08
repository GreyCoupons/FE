//imports
import React, { Component } from "react";

//assets
import Splash from "../../assets/homepage/gc_mode.svg"
//modules
//components
import FeaturedProducts from "../FeaturedProducts";
import SearchBar from "../searchBar"
//style
import Style from "./style";

class DealofDay extends Component {
    render() {
        return (
            <Style className="page search">
                <div className="main fadeIn">
                    <div className="header">
                        <img className="splashImg" src={Splash} alt="hand picked items" />
                    </div>
                    <SearchBar />
                    <FeaturedProducts />
                </div>
            </Style>
        );
    }
}

export default DealofDay;
