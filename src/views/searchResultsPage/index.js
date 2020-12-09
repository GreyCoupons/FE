//imports
import React from "react";

//components
import Results from "../../components/DisplayCards";
import SearchBar from "../../components/searchBar"

//style
import Style from "./style";

// Test API 
let displayProducts = [
    {
        product: "iPhone Lighting Cable",
        percent: "74%",
        discountPrice: "$7.99",
        ogPrice: "$20.00",
        link: "https://amzn.to/34swNpO",
        category: "Electronics",
        image:
            "https://images-na.ssl-images-amazon.com/images/I/91o%2Bd8IiKHL._SL1500_.jpg",
    },
    {
        product: "Boots!",
        percent: "55%",
        discountPrice: "$30.00",
        ogPrice: "$70.00",
        link: "https://amzn.to/2TOHk8A",
        category: "Clothing & Shoes",
        image: "https://m.media-amazon.com/images/I/41aIdanahmL._SR400,400_.jpg",
    },
    {
        product: "Boots!",
        percent: "55%",
        discountPrice: "$30.00",
        ogPrice: "$70.00",
        link: "https://amzn.to/2TOHk8A",
        category: "Clothing & Shoes",
        image: "https://m.media-amazon.com/images/I/41aIdanahmL._SR400,400_.jpg",
    },
    {
        product: "Boots!",
        percent: "55%",
        discountPrice: "$30.00",
        ogPrice: "$70.00",
        link: "https://amzn.to/2TOHk8A",
        category: "Clothing & Shoes",
        image: "https://m.media-amazon.com/images/I/41aIdanahmL._SR400,400_.jpg",
    },
];

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            loading: false
        }
    }
    componentDidMount() {
        let { query } = this.props.location.state
        // Sends search query to backend to look for products and send to state
    }
    render() {
        return (
            <Style className="page homepage">
                <div className="homepage-container">
                    <div className="mobileView">
                        {this.state.loading ?
                            <p>loading</p> :
                            <>
                                <SearchBar />
                                <Results displayProducts={this.state.results} />
                            </>
                        }
                    </div>
                </div>
            </Style>
        )
    }
}

export default SearchResults