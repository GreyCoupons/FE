import Styled from "styled-components"
import landscape from "./landscape"
import portrait from "./portrait"

export default Styled.nav`
    .ratingBox {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }   
    @media (orientation: landscape) {
        ${landscape}
    }
    @media (orientation: portrait) {
        ${portrait}
    }
    .linkRedirect{
        height: 100%;
    }
    .imgContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 63%;
    }
    .bottomContainer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`
