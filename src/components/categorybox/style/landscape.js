export default `
    .box {
        width: 154px;
        height: 154px;
        background: rgba(51, 145, 57, 0.8);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px;
        padding: 10px;
        transition: .3s ease;
        cursor: pointer;
    }
    .box:hover {
        transform: scale(1.05);
    }
    .text {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FBFBFB;
    }
`;
