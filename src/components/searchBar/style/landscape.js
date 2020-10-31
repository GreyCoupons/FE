export default `
.main {
    display: flex;
    justify-content: center;
    align-items: center;
         box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      height: 20px;
    width: 500px;
    
    border-radius: 500px 500px 500px 500px;
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

}

input:focus{
     outline:none !important;

}

.searchSelected {
        border-color: #a0a0a0 #b9b9b9 #b9b9b9 #b9b9b9;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
}
    // border-color:#4d90fe;


.iconContainer {
    border-radius: 0 50px 50px 0;
    background: #f2f2f2;
    border: 1px solid #f2f2f2;
    color: #757575;
    cursor: default;
    font-size: 14px;
    font-weight: bold;
    width: 100px;
    padding: 0 16px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
}

// .iconContainer:hover {
//     color: #222;
// }

.searchIcon {
    width: 26px
}
`;
