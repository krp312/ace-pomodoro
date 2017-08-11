import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { fetchSessions } from '../actions/actions';
// import Spinner from 'react-spinkit';

import './styles/user-data.css';

export class UserData extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSessions());
  }

  renderResults() {
    console.log(this.props.sessions.sessionInfo)
    console.log(typeof this.props.sessions.sessionInfo)
    // console.log(this.props.sessions.sessionInfo.map((item, index) => {
    //   item.name = 'bob'
    // }));
    if (this.props.loading) {
      // return <Spinner spinnerName="circle" noFadeIn />;
      return <div>loading sessions...</div>;
    }
    if (this.props.error) {
      return (
        <strong>
          {this.props.error}
        </strong>
      );
    }
    if (this.props.sessions.sessionInfo) {
    const sessionData = this.props.sessions.sessionInfo.map((item, index) =>
      <table className="session-result" key={index}>
         <tr>
          <th>session</th>
          <th>set work time</th>
          <th>set break time</th>
          <th>total completed sessions</th>
        </tr>
        <tr>
          <th>
            <Link to="/set-pomo">
              {item.name}
            </Link>
          </th>
          <th>
            {item.work_duration.minutes} minutes, {item.work_duration.seconds} seconds
          </th>
          <th>
            {item.break_duration.minutes} minutes, {item.break_duration.seconds} seconds
          </th>
          <th>do later</th>
        </tr> 
      </table>
    )
    return (
      <div className="single-session-container">
        {console.log(this.props.sessions)}
        {console.log(this.props.sessions.sessionInfo)}
                {sessionData}        
      </div>
    );
  }
  }//closing if bracket
  render() {
    return (
      <div className="user-data">
        <div className="user-sessions-container">
          {this.renderResults()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sessions: state.sessions,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(UserData);
