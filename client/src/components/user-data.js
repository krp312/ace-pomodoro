import React from 'react';
import { connect } from 'react-redux';
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
            return <div>loading...</div>
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
                <th>{sessionItem.name}</th>
                <th>{sessionItem.work_duration.hours} hours</th>
                <th>{sessionItem.break_duration.hours} hours</th>
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
