import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from "../actions/index";

import './styles/header.css';

export class Header extends React.Component {
  logoutUser(e) {
    e.preventDefault();
    window.location.replace("/");
    this.props.dispatch(logoutUser());
  }
  
  conditionalMainPage() {
    if (this.props.loggedIn === false) {
      return <Link to="/">Ace Pomodoro</Link>
    } else {
      return <Link to="/start-session">Ace Pomodoro</Link>
    }
  }

  render() {
    return (
      <div className="header">
        <h1>
          {this.conditionalMainPage()}
        </h1>
        <span className="nav-span">
          <Link to="/pomo-info">Pomo?</Link>
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Header);
