export default `
    .searchMain {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    input{
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s ease;
        height: 38px;
        width: 70%;
        margin:  35px 0;
        border-radius: 55px 0 0 55px;
        padding: 0 0 0 15px;
    }

    textarea:focus, input[type="text"]:focus, input[type="password"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="date"]:focus, input[type="month"]:focus, input[type="time"]:focus, input[type="week"]:focus, input[type="number"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="color"]:focus, .uneditable-input:focus {   
        // border-color: #E1C972;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px grey;
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    }
    .move {
        position: absolute;
        z-index: 66;
        background: white;
        width: 100%;
        transition: .3s ease;
    }
    .iconContainer {
        border-left: none;
        border-radius: 0 50px 50px 0;
        background: #E1C972;
        border: 1px solid #f2f2f2;
        color: #757575;
        cursor: default;
        font-size: 14px;
        font-weight: bold;
        width: 50px;
        height: 42.5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;
