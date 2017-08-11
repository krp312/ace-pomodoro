import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginUserRequest, updateCredentials } from '../actions/actions';

import './styles/login.css';

export class LogIn extends React.Component {
  loginSubmit(event) {
    event.preventDefault();
    if ((this.props.seconds !== 0 && this.props.minutes !== 0) || this.props.seconds !== 0) {
      this.props.history.push('/work-timer');
    } else if (this.props.seconds === 0 && this.props.minutes === 0) {
      this.props.history.push('/set-pomo');
    }
    
    const username = this.username.value;
    const password = this.password.value;

    const credentials = `${username}:${password}`;
    const encodedAuthHeader = btoa(credentials);
    window.encodedAuthHeader = encodedAuthHeader;

    this.props.dispatch(updateCredentials(username, password));
    this.props.dispatch(loginUserRequest());
  }

  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <form className="login-form" onSubmit={e => this.loginSubmit(e)}>
          <input
            aria-label="username"
            id="username"
            type="text"
            placeholder="username"
            ref={input => (this.username = input)}
          />
          <input
            aria-label="password"
            id="password"
            type="password"
            placeholder="password"
            ref={input => (this.password = input)}
          />
          <button type="submit">login</button>
        </form>
        <span className="create-account-span">
          <Link to="/create-user" className="create-account-link">create user</Link>
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
