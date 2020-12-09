// export default `
//     .navbar-container {
//         width: 100%;
//         height: 60px;
//         padding: 0 15px;
//         background: #E1C972;
//         display: flex;
//         align-items: center;
//         margin: 20px 0 0;
//     }
//     .mobileView {
//         display: flex;
//     }
//     .logo {
//         width: 178px;
//         display: flex;
//         justify-content: space-betwe
//         margin: 
//     }
//     .right-container {
//         margin: 0 auto;
//     }
//     .aboutUs {
//         font-family: Raleway;
//         font-style: normal;
//         font-weight: 600;
//         font-size: 16px;
//         text-align: center;
//         letter-spacing: 0.05em;
//         padding-right: 10px;
//         color: rgba(48, 49, 63, 0.8);
//         text-decoration: none;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }

//     .heartEmoji {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }
// `;


export default `
    .mobileView {
        width: 100%;  
        overflow: hidden;
        position: fixed;
        bottom: 0px;
        background: #FBFBFB;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
        z-index: 50;
    }
    .navbar-container {
        width: 100%;
        bottom: 0px;
        display: flex;
        align-items: center;
    }
    .selected {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #E1C972;
        width: 100%;
        height: 100%;
        transition: .3s ease;
    }
    .dashboardContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        cursor: pointer;
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
        transition: .3s ease;
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
