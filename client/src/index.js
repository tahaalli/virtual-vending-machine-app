import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Machine from "./components/Machine/Machine";
import Dashboard from "./components/Dashboard/Dashboard";
import "./index.css";

ReactDOM.render(
  <React.Fragment>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Machine />
        </Route>
        <Route exact path="/admin">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
