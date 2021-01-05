import Styled from "styled-components"
import landscape from "./landscape"
import portrait from "./portrait"

export default Styled.nav`
    width: 100%;
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 80px 0 30px;
    }
    @media (orientation: landscape) {
        ${landscape}
    }
    @media (orientation: portrait) {
        ${portrait}
    }
    .star {
        margin: 0 15px;
        width: 40px;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`
