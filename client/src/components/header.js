import React from 'react';

// import { Link } from 'react-router';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { viewUserData, showPomoInfo } from '../actions/actions';

import './styles/header.css';

export class Header extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchCheeses())
  // }
  userClick(event) {
    event.preventDefault();
    console.log(this.props);
    this.props.history.push(`/user-data`);
    this.props.dispatch(viewUserData());
  }

  render() {
    return (
      <div className="header">
         <span className="users-span"><Link to="/user-data">Users</Link></span> 
         <h1><Link to="/">Ace Pomodoro</Link></h1>
         <span className="nav-span"><Link to="/pomo-info">Pomo?</Link></span>
      </div>
    )
  }
}

// const mapStateToProps = (state) => (
//   {
//   // cheeses: state.cheeses.cheeses,
//   // loading: state.cheeses.loading
// })

export default Header;
