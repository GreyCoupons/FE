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
