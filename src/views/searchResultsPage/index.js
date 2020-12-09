//imports
import React from "react";

//components
import DealofDay from "../../components/dealofday";
import Categories from "../../components/categories";
import NewestCodes from "../../components/newestcodes";
import Featured from "../../components/featured";
import Explore from "../../components/explore";
//style
import Style from "./style";

class Homepage extends React.Component {
    render() {
        return (
            <Style className="page homepage">
                <div className="homepage-container">
                    <div className="viewheight">
                        <DealofDay />
                    </div>
                    <div className="mobileView">
                        <Explore />
                    </div>
                </div>
            </Style>
        )
    }
}

export default Homepage