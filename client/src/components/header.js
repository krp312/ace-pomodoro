import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles/header.css';

export class Header extends React.Component {
  renderUser() {
    if (this.props.username !== '') {
      return (
        <span>
          {this.props.username}
        </span>
      );
    } else {
      return <span>Not logged in</span>;
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
          <Link to="/">Ace Pomodoro</Link>
        </h1>
        <span className="nav-span">
          <Link to="/pomo-info">Pomo?</Link>
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username
});

export default connect(mapStateToProps)(Header);
