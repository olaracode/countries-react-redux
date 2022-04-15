import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import { Provider } from "react-redux";
import configureStore from "./store/store.js";

ReactDOM.render(
  <Provider store={configureStore}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);
