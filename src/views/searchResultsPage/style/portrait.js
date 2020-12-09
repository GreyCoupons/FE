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
`;