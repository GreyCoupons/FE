//imports
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//assets
import Logo from "../../../assets/common/GCLogo.svg";
import Heart from "../../../assets/homepage/heart.svg";

//modules
//components
import MobileDashboard from "./mobile-dashboard";
//style
import Style from "./style";

class BottomNavbar extends Component {
    componentDidMount() {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // We listen to the resize event
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }

    state = {
        Featured: true,
        Explore: false,
    };
    render() {
        return (
            <Style className="page navbar">
                <div className="navbar-container">
                    <div className="desktopView">
                        <NavLink to="/" className="left-container">
                            <img src={Logo} alt="Grey Coupons" className="logo" />
                        </NavLink>
                        <div className="right-container">
                            <p to="/app-main/about-us" className="aboutUs">
                                Made with <img src={Heart} alt="heart" className="heartEmoji" />{" "}
								by "the warriors three"
							</p>
                        </div>
                    </div>
                    <div className="mobileView">
                        <MobileDashboard toggled={this.state} />
                    </div>
                </div>
            </Style>
        );
    }
}

export default BottomNavbar;
