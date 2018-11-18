import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, updateCredentials } from '../actions/index';
import './styles/login.css';

export class LogIn extends React.Component {
  loginSubmit(event) {
    event.preventDefault();   
    const username = this.username.value;
    const password = this.password.value;
    this.props.dispatch(updateCredentials(username, password));
    this.props.dispatch(loginUser(username, password));
  }

  render() {
    if (this.props.jwt !== "") {
      this.props.history.push('/start-session');
    }

    return (
      <div className="login">
        <h2>Login</h2>
        <form className="login-form" onSubmit={e => this.loginSubmit(e)}>
          <input
            aria-label="username"
            id="username"
            type="text"
            placeholder="username"
            className="input-login"
            required
            ref={input => (this.username = input)}
          />
          <input
            aria-label="password"
            id="password"
            type="password"
            placeholder="password"
            className="input-login"
            required
            ref={input => (this.password = input)}
          />
          <button type="submit" className="login-button">login</button>
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
  seconds: state.sessionSecondsRemaining,
  jwt: state.jwt
});
export default connect(mapStateToProps)(LogIn);
