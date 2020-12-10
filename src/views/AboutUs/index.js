//imports
import React from "react";

//components
import Results from "../../components/DisplayCards";
import SearchBar from "../../components/searchBar"

//style
import Style from "./style";

class SearchResults extends React.Component {
    render() {
        console.log('about us')
        return (
            <Style className="page homepage">
                <div className="aboutusContainer">
                    <div className="textBox">
                        <p className="text">We are three developers whose goal is to build ways to solve common problems, and help people by building apps like this.</p>
                    </div>
                    <div className="textBox">
                        <p className="text">For inquiries: <a href="mailto:greycouponsteam@gmail.com">greycouponsteam@gmail.com</a>   </p>
                    </div>
                </div>
            </Style>
        )
    }
}

export default SearchResults