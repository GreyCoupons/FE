export default `
    .box {
        width: 288px;
        height: 236px;
        border-radius: 10px;
        cursor: pointer;
        transition: .3s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        position: relative;
        margin: 0 15px;
    }
    .box:hover {
        transform: scale(1.05);
    }
    .linkRedirect {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        position: relative;
        width: 288px;
        height: 236px;
    }
    .yellow {
        width: 160px;
        height: 46px;
        background: rgba(184, 158, 65, 0.8);
        border-radius: 10px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 11px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FBFBFB;
        z-index: 1;
    }
    .red {
        width: 160px;
        height: 46px;
        background: rgba(146, 32, 29, 0.8);
        border-radius: 10px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 11px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FBFBFB;
        z-index: 1;
    }
    .bottomContainer {
        width: 288px;
        height: 60px;
        background: rgba(48, 49, 63, 0.6);
        border-radius: 0px 0px 10px 10px;
        z-index: 1;
    }
    .imgContainer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    .productImg {
        position: absolute;
        width: 80%;
    }
    .titleContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 5px;
    }
    .percentContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;    
    }
    .text {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 14px;
        letter-spacing: 0.05em;
        color: #FBFBFB;
    }
    .productText {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 0.05em;
        color: #FBFBFB;
        width: 100%;
    }
    .percent {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 14px;
        text-align: right;
        letter-spacing: 0.05em;
        color: #FBFBFB;
        padding-bottom: 4px;
    }
    .off {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 14px;
        letter-spacing: 0.05em;
        color: #FBFBFB;
    }
`;
