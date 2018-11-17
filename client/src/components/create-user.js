import React from "react";
import { connect } from "react-redux";
import "./styles/create-user.css";
import { createUser, updateUsername, updatePassword } from "../actions/index";

export class CreateUser extends React.Component {
  createUserForm(event) {
    event.preventDefault();
    this.props.dispatch(createUser(this.props.loginUsername, this.props.loginPassword));
    this.props.history.push('/');
  }

  updateUsername(name) {
    this.props.dispatch(updateUsername(name));
  }

  updatePassword(password) {
    this.props.dispatch(updatePassword(password));
  }

  render() {
    return (
      <div className="login">
        <h2>create user</h2>
        <form onSubmit={e => this.createUserForm(e)}>
          <input aria-label="create username" id="createUsername" type="text" placeholder="username" onChange={e => this.updateUsername(e.target.value)} value={this.props.loginUsername} />
          <input aria-label="create password" id="createPassword" type="password" placeholder="password" onChange={e => this.updatePassword(e.target.value)} value={this.props.loginPassword} />
          <button type="submit" className="create-user-button">create</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  minutes: state.sessionMinutesRemaining,
  seconds: state.sessionSecondsRemaining,
  loginUsername: state.loginUsername,
  loginPassword: state.loginPassword
});

export default connect(mapStateToProps)(CreateUser);
