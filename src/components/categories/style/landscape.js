export default `
    .main {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .title {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 550;
        font-size: 38px;
        line-height: 44px;
        letter-spacing: 0.10em;
        color: #30313F;
        margin: 0px 0 20px;
    }
    .title2 {
        font-family: Raleway;
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 35px;
        color: #30313F;
    }
    .categorySection {
        width: 100%;
        display: flex;
        padding: 35px 0 35px 35px;
        justify-content: center;
        align-items: center;
    }
    .line {
        width: 100%;
        height: 0;
        padding-top: 6px;
        border-bottom: 2px solid #30313F;
        margin-left: 20px;
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
`;
