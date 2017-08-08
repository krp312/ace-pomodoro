import React from 'react';
import { connect } from 'react-redux';
import './styles/login.css';
// import * as actions from './actions';

import { loginUserRequest } from '../actions/actions';

export class LogIn extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchCheeses())
  // }
  formSubmit(event) {
    event.preventDefault();
    this.props.dispatch(loginUserRequest());
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={e => this.formSubmit(e)}>
          <input type="text" placeholder="username"></input>
          <input type="password" placeholder="password"></input>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
  // cheeses: state.cheeses.cheeses,
  // loading: state.cheeses.loading
})

export default connect()(LogIn);
