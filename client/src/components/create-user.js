import React from 'react';
import { connect } from 'react-redux';
import './styles/create-user.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { createUserRequest } from '../actions/actions';

export class CreateUser extends React.Component {
  createUserForm(event) {
    event.preventDefault();
    this.props.history.push(`/set-pomo`);
    this.props.dispatch(createUserRequest());
  }

  render() {
    return (
      <div className="login">
        <h2>create user</h2>
        <form onSubmit={e => this.createUserForm(e)}>
          <input type="text" placeholder="username"></input>
          <input type="password" placeholder="password"></input>
          <button type="submit">create</button>
        </form>
      </div>
    )
  }
}

export default CreateUser;
