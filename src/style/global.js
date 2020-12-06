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

    .fadeIn {
            -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
            -ms-animation: fadein 2s; /* Internet Explorer */
            -o-animation: fadein 2s; /* Opera < 12.1 */
                animation: fadein 2s;
    }

        @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Firefox < 16 */
        @-moz-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Safari, Chrome and Opera > 12.1 */
        @-webkit-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Internet Explorer */
        @-ms-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        /* Opera < 12.1 */
        @-o-keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
    }
`;
