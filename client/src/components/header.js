import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';

import './styles/header.css';


export class Header extends React.Component {
  renderUser() {
    console.log(this.props.user)
    if (this.props.user !== '') {
            return <span>{this.props.user}</span>
        } else {
          return <span>Not logged in</span>
        }
  }
  
  render() {
    return (
      <div className="header">
         <span className="users-span"><Link to="/user-data">{this.renderUser()}</Link></span> 
         <h1><Link to="/">Ace Pomodoro</Link></h1>
         <span className="nav-span"><Link to="/pomo-info">Pomo?</Link></span>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
  user: state.user,
})


export default connect(mapStateToProps)(Header);
