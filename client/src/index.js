import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";
const store = createStore(allReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />{" "}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
