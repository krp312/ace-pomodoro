import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LogIn from './login';
import CreateUser from './create-user';
import UserData from './user-data';
import SetSessionTimes from './set-session-times';
import WorkTimer from './work-timer';
import BreakTimer from './break-timer';
import PomoInfo from './pomo-info';
import Header from './header';
// import EnsureLoggedInContainer from './ensure-logged-in-container';

import './styles/container.css';

export function App(props) {
return (
  <Router>
    <div className="app">
      <Header/>
      <main>
        <Route exact path="/" component={LogIn} /> 
        <Route exact path="/create-user" component={CreateUser} />
        <Route exact path="/pomo-info" component={PomoInfo} />
        <Route exact path="/user-data" component={UserData} />
        <Route exact path="/work-timer" component={WorkTimer}/>
        <Route exact path="/break-timer" component={BreakTimer}/>
        <Route exact path="/set-session-times" component={SetSessionTimes}/>
        <Route exact path="/set-session-times/:sessionId" component={SetSessionTimes}/>
      </main>
    </div>
  </Router>
  );
}

export default connect()(App);
