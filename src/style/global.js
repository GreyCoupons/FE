//imports
import { createGlobalStyle } from "styled-components";
//components
import reset from "./components/reset";
import fonts from "./components/fonts";
import common from "./components/common";

// import Bckground from "../assets/common/background.svg";

export default createGlobalStyle`
    ${reset}
    ${fonts}
    ${common}
    html, body {
        width: 100%;
        height: 100%;
        // background-image: url(${Bckground});
        // background-repeat: no-repeat;
        // background-size: 156% 156%;
        // background-position: center;
        // background-attachment: fixed;
    }
    #root {
        width: 100%;
        height: 100%;
    }
// Theme font
    p, h1, h2, h3, h4, button {
        font-family: 'Ubuntu Condensed', sans-serif;
    }
`;
