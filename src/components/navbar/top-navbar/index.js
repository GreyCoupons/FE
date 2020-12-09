//imports
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//assets
import Logo from "../../../assets/common/GCLogo.svg";

//modules
//components

//style
import Style from "./style";

class TopNavbar extends Component {
    render() {
        return (
            <Style className="page navbar">
                <div className="navbar-container">
                    <NavLink to="/" className="left-container">
                        <img src={Logo} alt="Grey Coupons" className="logo" />
                    </NavLink>
                    <div className="right-container">
                        <NavLink
                            to="/aboutus"
                            className="aboutUs"
                        >
                            About Us
						</NavLink>
                    </div>
                </div>
            </Style>
        );
    }
}

export default TopNavbar;
