import Styled from "styled-components"
import landscape from "./landscape"
import portrait from "./portrait"

export default Styled.nav`
    width: 100%;
    #version2 {
        font-family: raleway;
        font-size: 32px;
    }

    .main {
        padding: 35px 0;
    }
    
    #version2 .one {
        opacity: 0;
        -webkit-animation: dot 1.3s infinite;
        -webkit-animation-delay: 0.0s;
        animation: dot 1.3s infinite;
        animation-delay: 0.0s;
    }

    #version2 .two {
        opacity: 0;
        -webkit-animation: dot 1.3s infinite;
        -webkit-animation-delay: 0.2s;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
    }

    #version2 .three {
        opacity: 0;
        -webkit-animation: dot 1.3s infinite;
        -webkit-animation-delay: 0.3s;
        animation: dot 1.3s infinite;
        animation-delay: 0.3s;
    }

    @keyframes dot { /* ADD @-webkit-keyframes for webkit support */
        0% { opacity: 0; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }

        @media (orientation: landscape) {
            ${landscape}
        }
        @media (orientation: portrait) {
            ${portrait}
        }
`
