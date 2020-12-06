//imports
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//assets
import Logo from "../../../assets/common/GCLogo.svg";
import Heart from "../../../assets/homepage/heart.svg";
import Pepper from "../../../assets/homepage/pepper.svg";
import compass from "../../../assets/homepage/compass.svg";
import WhitePepper from "../../../assets/homepage/whitePepper.svg";
import WhiteCompass from "../../../assets/homepage/whiteCompass.svg";

//modules
//components

//style
import Style from "./style";

class MobileDashboard extends Component {
    toggleNav() { }
    render() {
        let { Featured, Explore } = this.props.toggled;
        let { view } = this.props;
        return (
            <Style className="page navbar">
                <div className="dashboardContainer">
                    <div className={this.props.view === "featured" ? "selected" : "navContainer"}
                        onClick={() => this.props.toggleView("featured")}>
                        <img src={this.props.view === "featured" ? WhitePepper : Pepper} alt="pepper" />
                        <p className={this.props.view === "featured" ? "whiteText" : "dashboardText"}>
                            Featured{" "}
                        </p>
                    </div>
                    <div
                        className={this.props.view === "explore" ? "selected" : "navContainer"}
                        onClick={() => this.props.toggleView("explore")}
                    >
                        <img src={this.props.view === "explore" ? WhiteCompass : compass} alt="compass" />
                        <p className={this.props.view === "explore" ? "whiteText" : "dashboardText"}>Explore</p>
                    </div>
                </div>
            </Style>
        );
    }
}

export default MobileDashboard;
