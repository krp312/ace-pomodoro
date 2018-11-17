import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from './components/login';
import CreateUser from './components/create-user';
import UserData from './components/user-data';
import SetSessionTimes from './components/set-session-times';
import WorkTimer from './components/work-timer';
import BreakTimer from './components/break-timer';
import PomoInfo from './components/pomo-info';
import Header from './components/header';
import './components/styles/container.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
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
}

export default App;
