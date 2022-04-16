import { createRoot } from "react-dom/client";
import Layout from "./Layout.jsx";
import { Provider } from "react-redux";
import configureStore from "./store/store.js";
import "./index.css";

/**
 * Using REACT 18 render Method
 * Learn More: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
 */

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={configureStore}>
    <Layout />
  </Provider>
);
