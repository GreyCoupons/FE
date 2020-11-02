export default `
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    height: 40px;
    width: 500px;
    margin:  35px 0 0;
    border-radius: 55px;
}
.main:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transition:  all 0.3s cubic-bezier(.25,.8,.25,1);
}
input{
    border: none;
    padding: 10px;
    margin: 10px 0;
    height: 20px;
    width: 500px;
    border:1px solid #eaeaea;
    outline:none;
    border-radius: 50px 0 0 50px;
    font-size: 17px;
    border-right: none;
}

textarea:focus, input[type="text"]:focus, input[type="password"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="date"]:focus, input[type="month"]:focus, input[type="time"]:focus, input[type="week"]:focus, input[type="number"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="color"]:focus, .uneditable-input:focus {   
    border-color: #E1C972;
    box-shadow: 0 1px 1px #E1C972 inset, 0 0 8px #E1C972;
    outline: 0 none;
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
    width: 85px;
    height: 42.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.searchIcon {
    width: 26px
}
`;
