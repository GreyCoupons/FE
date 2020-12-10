//imports
import React, { Component } from "react";

//assets
import Splash from "../../assets/homepage/gc_mode.svg"
//modules
//components
import FeaturedProducts from "../DisplayCards";
import SearchBar from "../searchBar"
import SplashImg from "../splashImg"

//style
import Style from "./style";


let displayProducts = [
    {
        product: "iPhone Lighting Cable and something long by hasbro",
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


class DealofDay extends Component {
    render() {
        return (
            <Style className="page search">
                <div className="main fadeIn">
                    <SplashImg />
                    <SearchBar />
                    <div id="featuredSection">
                        <FeaturedProducts displayProducts={displayProducts} />
                    </div>
                </div>
            </Style>
        );
    }
}

export default DealofDay;
