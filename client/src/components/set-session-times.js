import React from 'react';
import { connect } from "react-redux";
import './styles/set-session-times.css';

export class SetSessionTimes extends React.Component {
  submitSessionTimes(event) {
    event.preventDefault();
    this.props.history.push('/work-timer');
  }

  render() {
    return (
      <form className="submit-sessions-form" onSubmit={e => this.submitSessionTimes(e)}>
        <label htmlFor="workDuration">Work (minutes)</label>
        <input
          aria-label="work duration"
          type="text"
          placeholder="25"
          required
          id="workDuration"
        />
        <label htmlFor="breakDuration">Break (minutes)</label>
        <input
          aria-label="break duration"
          type="text"
          placeholder="5"
          required
          id="breakDuration"
        />
        <label htmlFor="sessionName">Session Name</label>
        <input
          aria-label="pomodoro session name"
          type="text"
          placeholder="Study React"
          id="sessionName"
          required
        />
        <button type="submit" className="start-pomo-button">Start</button>
      </form>
    )
  }
}

export default connect()(SetSessionTimes);