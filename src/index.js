import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Layouts/index";

import store from "./Services/Redux/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
