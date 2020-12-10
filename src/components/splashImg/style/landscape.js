export default `
    .mainContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .yellowBar {
        position: absolute;
        width: 100%;
        height: 255px;
        background: #E1C972;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
        transition: .3s ease;
        
        @media (max-width: 1135px) {
            height: 200px;
        }    
    }
    .splash {
        z-index: 1;
        cursor: pointer;
        width: 86%;
        filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));
        border-radius: 34px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
        @media(min-width: 750px){
            margin: 40px 0;
            width: 100%;
            border-radius: 0px;
        }
    }
`;
