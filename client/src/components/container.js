import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import LogIn from './login';
import CreateUser from './create-user';
import UserData from './user-data';
import SetPomo from './set-pomo';
import WorkTimer from './work-timer';
import BreakTimer from './break-timer';
import PomoInfo from './pomo-info';
import Header from './header';

import './styles/container.css';

export default function App(props) {
    const sessionActive = false;
    // Create state variable to keep track of when sessionMinutesRemaining and secondsRemaining === 0
    // Make sure that both create user button and login user button LEAD to WorkTimer component while
        // The session is still active
    return (
        <Router>
            <div className="app">
                <Header/>
                <main>
                    <Route exact path="/" component={LogIn} />
                    <Route exact path="/create-user" component={CreateUser} />
                    <Route exact path="/user-data" component={UserData} />
                    <Route exact path="/work-timer" component={WorkTimer}/>
                    <Route exact path="/break-timer" component={BreakTimer}/>
                    <Route exact path="/pomo-info" component={PomoInfo} />
                    <Route exact path="/set-pomo" render={() => sessionActive ? <UserData /> : <SetPomo />}/>
                </main>
            </div>
        </Router>
    );
}

