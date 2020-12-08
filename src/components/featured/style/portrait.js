export default `
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .title {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 550;
        font-size: 25px;
        line-height: 44px;
        letter-spacing: 0.10em;
        color: rgba(48, 49, 63, 0.8);
        width: 60%;
        display: flex;
        justify-content: flex-start;
        padding-left: 10px;
        // border-bottom: 2px solid rgba(48, 49, 63, 0.8);
    }
    .header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .splashImg{
        width: 100%;
        background: url(hero_grey_coupon.png);
        filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.4));
    }
`;
