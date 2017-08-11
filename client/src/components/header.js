import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from "../actions/actions";

import './styles/header.css';

export class Header extends React.Component {
  logoutUser(e) {
    e.preventDefault();
    console.log('you logged out')
    // location.reload('/');
    window.location.replace("/");
    this.props.dispatch(logoutUser());
  }
  
  renderUser() {
    if (this.props.loggedIn === true) {
      return (
        <div>
          <span>
          {this.props.username}
          </span>
          <button className="logout-button" onClick={e => this.logoutUser(e)}>Logout</button>
        </div>
      );
    } else {
      return <span>Not logged in</span>;
    }
  }
  // if user is logged in, clicking Ace Pomodoro doesnt direct to login page
  conditionalMainPage() {
    if (this.props.loggedIn === false) {
      return <Link to="/">Ace Pomodoro</Link>
    } else {
      return <Link to="/set-pomo">Ace Pomodoro</Link>
    }
  }

  render() {
    return (
      <div className="header">
        <span className="users-span">
          <Link to="/user-data">
            {this.renderUser()}
          </Link>
        </span>
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
