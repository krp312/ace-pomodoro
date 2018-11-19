import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setSessionTimes,
  setTimerType,
  setSessionName
} from '../actions/index';
import './styles/start-session.css';

export class StartSession extends React.Component {
  submitSession() {
    const { dispatch, history } = this.props;
    dispatch(
      setSessionTimes(
        this.initialWorkMinutes.value,
        this.initialBreakMinutes.value
      )
    );
    dispatch(setSessionName(this.sessionName.value));
    dispatch(setTimerType('work'));
    history.push('/timer');
  }

  render() {
    return (
      <form
        className="submit-sessions-form"
        onSubmit={() => this.submitSession()}
      >
        <label htmlFor="initial-work-minutes">
          Work (minutes)
          <input
            aria-label="initial work minutes"
            type="text"
            placeholder="25"
            id="initial-work-minutes"
            ref={(input) => {
              this.initialWorkMinutes = input;
            }}
            required
          />
        </label>
        <label htmlFor="initial-break-minutes">
          Break (minutes)
          <input
            aria-label="initial break minutes"
            type="text"
            placeholder="5"
            id="initial-break-minutes"
            ref={(input) => {
              this.initialBreakMinutes = input;
            }}
            required
          />
        </label>
        <label htmlFor="session-name">
          Session Name
          <input
            aria-label="session name"
            type="text"
            placeholder="Study React"
            id="session-name"
            ref={(input) => {
              this.sessionName = input;
            }}
            required
          />
        </label>
        <button type="submit" className="start-session-button">
          Start
        </button>
      </form>
    );
  }
}

StartSession.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired
};

export default connect()(StartSession);
