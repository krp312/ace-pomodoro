import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LogIn from "./login";
import CreateUser from "./create-user";
import UserData from "./user-data";
import SetPomo from "./set-pomo";
import WorkTimer from "./work-timer";
import BreakTimer from "./break-timer";
import PomoInfo from "./pomo-info";
import Header from "./header";

import "./styles/container.css";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <main>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/create-user" component={CreateUser} />
            <Route exact path="/user-data" component={UserData} />
            <Route exact path="/work-timer" component={WorkTimer} />
            <Route exact path="/break-timer" component={BreakTimer} />
            <Route exact path="/pomo-info" component={PomoInfo} />
            <Route exact path="/set-pomo" component={SetPomo}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
