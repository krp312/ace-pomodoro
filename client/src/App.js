import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from './components/login.jsx';
import CreateUser from './components/create-user';
import UserData from './components/user-data';
import StartSession from './components/start-session';
import Timer from './components/timer.jsx';
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
            <Route exact path="/timer" component={Timer}/>
            <Route exact path="/start-session" component={StartSession}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
