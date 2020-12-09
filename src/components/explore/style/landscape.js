export default `
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 80px 0 0 0;
    }
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .infoContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0;  
    }
    .title {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 550;
        font-size: 38px;
        line-height: 44px;
        letter-spacing: 0.10em;
        color: #30313F;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        // margin: 0px 0 20px;
    }
    .title2 {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 37px;
        /* identical to box height */   
        width: 100%;
        letter-spacing: 0.1em;
        
        color: #30313F;
    }
    .categorySection {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .line {
        width: 100%;
        height: 0;
        border-bottom: 2px solid #30313F;
    }
    .imgContainer {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .categoryTypes {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    .seeAll {
        margin: 15px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 100%;
        font-family: Raleway;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
        color: #000000;
        cursor: pointer;
    }
    .leftContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;  
        margin: 0 auto;
    }
    .buttonContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center; 
    }
    button {

        /* inherit font & color from ancestor */
        color: inherit;
        font: inherit;

        line-height: normal;

        /* Corrects font smoothing for webkit */
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;

        -webkit-appearance: none;

        width: 201px;
        height: 42px;

        background: rgba(97, 90, 156, 0.8);
        border-radius: 11px;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 160.4%;
        /* identical to box height, or 32px */

        text-align: center;
        letter-spacing: 0.1em;
        margin: 25px 0;
        color: #FBFBFB;
        cursor: pointer;
        border: none;
        transition: .3s ease;
    }

    button:hover,
    button:focus {
        border: none;
        outline:none;
        background: #8F86DE;
    }
    button:active {
        background: #3C357A;
        transform: scale(0.95);
    }
    .productImg {
        width: 100%;
    }
    .discountedPrice {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 34px;
        line-height: 160.4%;
        /* identical to box height, or 55px */
        letter-spacing: 0.1em;
        color: #30313F; 
    }
    .currentPrice {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 160.4%;
        /* identical to box height, or 32px */
        margin: 0 15px;
        letter-spacing: 0.1em;
        text-decoration-line: line-through;
        
        color: rgba(48, 49, 63, 0.72);
    }
    .percentOff {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 160.4%;
        /* identical to box height, or 32px */
        
        letter-spacing: 0.1em;
        
        color: rgba(48, 49, 63, 0.72);
    }
    .productInformationContainer {
        width: 100%;
        padding: 15px 35px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .productInfo {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 29px;
        letter-spacing: 0.1em;

        color: #30313F;
    }
`;
