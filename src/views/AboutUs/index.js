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
                    <p className="text">We are </p>
                </div>
            </Style>
        )
    }
}

export default SearchResults