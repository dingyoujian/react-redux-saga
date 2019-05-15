import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes/routes";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import "src/common/css/common.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router>{renderRoutes(routes)}</Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
