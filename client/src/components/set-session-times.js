import React from 'react';
import { connect } from 'react-redux';
import { setSessionTimes, setTimerType, setSessionName } from '../actions/index';
import './styles/set-session-times.css';

export class SetSessionTimes extends React.Component {
  submitSessionTimes() {
    this.props.dispatch(setSessionTimes(
      this.initialWorkMinutes.value,
      this.initialBreakMinutes.value
    ));
    this.props.dispatch(setSessionName(this.sessionName.value));
    this.props.dispatch(setTimerType('work'));
    this.props.history.push('/timer');
  }

  render() {
    return (
      <form className="submit-sessions-form" onSubmit={() => this.submitSessionTimes()}>
        <label htmlFor="initial-work-minutes">Work (minutes)</label>
        <input
          aria-label="initial work minutes"
          type="text"
          placeholder="25"
          id="initial-work-minutes"
          ref={input => this.initialWorkMinutes = input}
          required
        />
        <label htmlFor="initial-break-minutes">Break (minutes)</label>
        <input
          aria-label="initial break minutes"
          type="text"
          placeholder="5"
          id="initial-break-minutes"
          ref={input => this.initialBreakMinutes = input}
          required
        />
        <label htmlFor="session-name">Session Name</label>
        <input
          aria-label="session name"
          type="text"
          placeholder="Study React"
          id="session-name"
          ref={input => this.sessionName = input}
          required
        />
        <button type="submit" className="start-session-button">Start</button>
      </form>
    )
  }
}

export default connect()(SetSessionTimes);