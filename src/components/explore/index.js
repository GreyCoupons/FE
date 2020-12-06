//imports
import React, { Component } from "react";

//assets
//modules
//components
import FeaturedProducts from "../FeaturedProducts";

//style
import Style from "./style";

class DealofDay extends Component {
    render() {
        return (
            <Style className="page search">
                <div className="main fadeIn">
                    <div className="header">
                        <p className="title">Explore</p>
                    </div>
                    <FeaturedProducts />
                </div>
            </Style>
        );
    }
}

export default DealofDay;
