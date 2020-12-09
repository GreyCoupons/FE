export default `
    .mobileView {
        display: block;
        height: 100%;
        overflow: scroll;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        scroll-snap-stop: normal;
        background: white;
    }

    .mobileView::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    .mobileView {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    .viewheight {
        display: none;
    }
    .aboutusContainer {
        background: #FFFFFF;
        box-shadow: 0px 3px 15px #E1E9F1;
        border-radius: 10px;
        padding: 25px;
        margin: 35px 20px;
    }
    .text {
        font-family: Raleway;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        letter-spacing: 0.05em;
        padding-right: 10px;
        color: rgba(48, 49, 63, 0.8);
        text-decoration: none;
    }
`;