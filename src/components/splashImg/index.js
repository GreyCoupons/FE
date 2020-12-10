//imports
import React, { Component } from "react";

//assets
import gc_mode from "../../assets/homepage/gc_mode.svg";
//modules
//components

//style
import Style from "./style";
import { withRouter } from "react-router-dom";

const executeScroll = () => {
    document.getElementById("featuredSection").scrollIntoView({ alignTo: true, behavior: "smooth", block: "start" });

};

class SplashImg extends Component {
    render() {
        return (
            <Style className="page splash">
                <div className="mainContainer">
                    {window.screen.width >= 760 ? <div className="yellowBar" /> : null}
                    <img src={gc_mode} className="splash" onClick={executeScroll} alt="hand picked coupons" />
                </div>
            </Style>
        );
    }
}

export default withRouter(SplashImg);
