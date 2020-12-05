export default `
    .desktopView {
        display: none;
    }
    .mobileView {
        width: 100%;  
        min-height: 100vh;
        min-height: -webkit-fill-available;
        position: sticky;
    }
    .navbar-container {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        background: #FBFBFB;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15)
    }
    .selected {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #E1C972;
        width: 100%;
        height: 100%;
    }
    .dashboardContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }
    .dashboardText {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        letter-spacing: 0.05em;
        padding-right: 10px;
        color: rgba(48, 49, 63, 0.8);
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .whiteText {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        letter-spacing: 0.05em;
        padding-right: 10px;
        color: white;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .navContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;
