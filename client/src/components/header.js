import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './styles/header.css';

export class Header extends React.Component {

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

export default Header;
