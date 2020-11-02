export default `
    .box {
        width: 183px;
        height: 162px;
        border-radius: 10px;
        cursor: pointer;
        transition: .3s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        position: relative;
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
        width: 183px;
        height: 162px;
    }
    .Electronics {
        width: 80px;
        height: 26px;
        background: rgba(184, 158, 65, 0.8);
        border-radius: 10px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 11px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FBFBFB;
        z-index: 1;
    }
    .bottomContainer {
        width: 183px;
        height: 60px;
        background: rgba(48, 49, 63, 0.6);
        border-radius: 0px 0px 10px 10px;
        z-index: 1;
    }
    .productImg {
        position: absolute;
        width: 100%;
    }
    .titleContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 5px;
    }
    .percentContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
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
