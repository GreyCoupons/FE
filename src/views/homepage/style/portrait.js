export default `
    .mobileView {
        display: block;
        margin: 15px 0;
        height: 100vh;
        overflow: scroll;
        overflow-x: hidden;
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