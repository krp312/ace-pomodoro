import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { loginUserRequest } from "../actions/actions";

import "./styles/login.css";

export class LogIn extends React.Component {
  loginSubmit(event) {
    event.preventDefault();
    if (
      (this.props.seconds !== 0 && this.props.minutes !== 0) ||
      this.props.seconds !== 0
    ) {
      this.props.history.push(`/work-timer`);
    } else if (this.props.seconds === 0 && this.props.minutes === 0) {
      this.props.history.push(`/set-pomo`);
    }
    this.props.dispatch(loginUserRequest());
  }

  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={e => this.loginSubmit(e)}>
          <input aria-label="username" id="username" type="text" placeholder="username" />
          <input aria-label="password" id="password"type="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
        <span className="create-account-span">
          <Link to="/create-user">create user</Link>
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  minutes: state.sessionMinutesRemaining,
  seconds: state.sessionSecondsRemaining
});
export default connect(mapStateToProps)(LogIn);
