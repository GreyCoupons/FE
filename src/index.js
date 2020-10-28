//imports
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
//router
import Router from "./router";
//style
import GlobalStyle from "./style/global";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Router />
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
