import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { fetchSessions } from '../actions/actions';
// import Spinner from 'react-spinkit';

import './styles/user-data.css';

export class UserData extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchSessions());
    }

    renderResults() {
        if (this.props.loading) {
            // return <Spinner spinnerName="circle" noFadeIn />;
            return <div>loading sessions...</div>
        }
        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }
        const sessions = this.props.sessions.map((sessionItem, index) => (
            <table className="session-result" key={index}>  
              <tr>
                <th>session</th>
                <th>total work time</th>
                <th>total break time</th>
                <th>total completed sessions</th>
              </tr>
              <tr>
                <th><Link to='/set-pomo'>{sessionItem.name}</Link></th>
                <th>{sessionItem.work_duration.minutes} minutes</th>
                <th>{sessionItem.break_duration.minutes} minutes</th>
                <th>do later</th>
              </tr>
            </table>
        ));
        return (
            <div className="single-session-container">
                {sessions}
            </div>
        );
    }

  render() {
    return (
      <div className="user-data">
        <div className="user-sessions-container">
          {this.renderResults()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
  sessions: state.sessions,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(UserData);
