import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSessions } from '../actions/actions';
// import Spinner from 'react-spinkit';

import './styles/user-data.css';

export class UserData extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSessions(this.props.username, this.props.password));
  }

  renderResults() {
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
          <thead>
            <tr>
              <th>session</th>
              <th>set work time</th>
              <th>set break time</th>
              <th>total completed sessions</th>
            </tr>
          </thead>
          <tbody>  
            <tr>
              <th>
                <Link to={`/set-pomo/${item.name}`}>
                  {item.name} 
                </Link>
              </th>
              <th>
                {item.work_duration.minutes} minutes, {item.work_duration.seconds}{' '}
                seconds
              </th>
              <th>
                {item.break_duration.minutes} minutes,{' '}
                {item.break_duration.seconds} seconds
              </th>
              <th>do later</th>
            </tr>
          </tbody>
        </table>
      );
      return (
        <div className="single-session-container">
          {sessionData}
        </div>
      );
    }
  } //closing if bracket

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
  error: state.error,
  username: state.username,
  password: state.password
});

export default connect(mapStateToProps)(UserData);
