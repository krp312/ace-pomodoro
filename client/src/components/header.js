// get store/state to update server variable
// setup post request to send persisted list


import React from 'react';
import { connect } from 'react-redux';
import './styles/header.css';
import { viewUserData, showPomoInfo } from '../actions/actions';

export class Header extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchCheeses())
  // }
  userClick(event) {
    event.preventDefault();
    this.props.dispatch(viewUserData());
  }

  pomoClick(event) {
    event.preventDefault();
    this.props.dispatch(showPomoInfo());
  }
  render() {
    return (
      <div className="header">
        <button className="users-button" onClick={e => this.userClick(e)}>Users</button>
        <button className="pomo-button"onClick={e => this.pomoClick(e)}>Pomo</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
  // cheeses: state.cheeses.cheeses,
  // loading: state.cheeses.loading
})

export default connect(mapStateToProps)(Header);
