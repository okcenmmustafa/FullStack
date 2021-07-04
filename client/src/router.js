import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
const RouterCıno = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </Router>
  );
};

export default RouterCıno;
