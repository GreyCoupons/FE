import Styled from "styled-components";
import landscape from "./landscape";
import portrait from "./portrait";

export default Styled.nav`
    @media (orientation: landscape) {
        ${landscape}
    }
    @media (orientation: portrait) {
        ${portrait}
    }
`;
