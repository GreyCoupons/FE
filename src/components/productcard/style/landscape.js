export default `
    .box {
        width: 192px;
        height: auto;
        border-radius: 10px;
        cursor: pointer;
        transition: .3s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        position: relative;
        margin: 20px;
        background: white;
        filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
        padding-top: 10px;
    }
    .box:hover {
        transform: scale(1.05);
    }
    .vendorIcon {
        position: absolute;
        background: white;
        width: 40px;
        border-radius: 25px;
        right: 10px;
        top: 0px;
        border: solid 1px gray;
    }
    .linkRedirect {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        position: relative;
        width: 100%;
        height: auto;
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
        // width: 288px;
        // height: 60px;
        background: rgba(48, 49, 63, 0.756);
        border-radius: 0px 0px 10px 10px;
        z-index: 1;
    }
    .imgContainer {
        display: flex;
        padding: 10px 0;
        justify-content: center;
        align-items: flex-start;
    }
    .productImg {
        // position: absolute;
        width: 60%;
        height: auto;
    }
    .titleContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 8px 0px;
    }
    .percentContainer {
        display: flex;
        justify-content: space-around;
        align-items: center; 
        width: 100%;   
    }
    .percentContainerEnd {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center; 
        width: 20%;   
        padding-top: 10px;
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
        font-size: 16.5px;
        line-height: 14px;
        letter-spacing: 0.05em;
        color: #FBFBFB;
        width: 100%;
        padding: 10px 5px;
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
    }
    .percent {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding-right: 5px;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 14px;
        text-align: right;
        letter-spacing: 0.05em;
        color: white;
        padding-bottom: 4px;
    }
    .off {
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
        width: 100%;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 14px;
        letter-spacing: 0.05em;
        color: white;
    }
    .prductPriceDiv {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        width: 100%;
    }
    .productTextogPrice {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        // letter-spacing: 0.05em;
        // width: 100%;
        text-decoration-line: line-through;
        color: white;
        display: flex;
        justify-content: flex-start;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .productTextDiscounted {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 14px;
        // letter-spacing: 0.05em;
        padding-right: 5px;
        color: #ffe78f;
        display: flex;
        justify-content: flex-start;
    }
`
