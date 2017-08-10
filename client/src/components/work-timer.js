import React from "react";
import { connect } from "react-redux";
import "./styles/work-timer.css";
import {
  showBreakTimer,
  postBreakDuration
} from "../actions/actions";
import moment from "moment";

export class WorkTimer extends React.Component {
  submitPomoForm(event) {
    event.preventDefault();
    this.props.history.push(`/break-timer`);    
    this.props.dispatch(showBreakTimer());

    clearInterval(this.props.intervalId)
    const userInput = parseInt(this.input.value);
    const currentTime = new Date().getTime();
    const eventTime = new Date(currentTime - userInput * 60000).getTime();
    let diffTime = eventTime - currentTime;
    let duration = moment.duration(diffTime, "milliseconds");
    const interval = 1000;

    // Displays starting time difference to DOM
    this.props.dispatch(
      postBreakDuration(
        Math.abs(duration.minutes()),
        Math.abs(duration.seconds())
      )
    );
    let setIntervalProps = this.props;
    setInterval(
      function() {
        duration = moment.duration(duration + interval, "milliseconds");

        setIntervalProps.dispatch(
          postBreakDuration(
            Math.abs(duration.minutes()),
            Math.abs(duration.seconds())
          )
        );
      },
      interval,
      setIntervalProps
    );
  }

  render() {
    let { secondsRemaining, minutesRemaining } = this.props;
    return (
      <div className="work-timer">
        <div className="clock" role="timer">
          <span className="minutes">
            {minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining}
          </span>
          <span className="colon">:</span>
          <span className="seconds">
            {secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining}
          </span>
        </div>
        <form onSubmit={e => this.submitPomoForm(e)}>
          <fieldset>
            <input
              aria-label="Pomodoro break duration"
              type="text"
              placeholder="5"
              required
              id="sessionDuration"
              ref={input => (this.input = input)}
            />
          </fieldset>
          <button className="break-timer-button" type="submit">
            Start Break Timer
          </button>
        </form>
      </div>
    );
  }
}

// When trying to access the state on this component make sure to check that reducer state
// key(s) matches.
const mapStateToProps = state => ({
  minutesRemaining: state.sessionMinutesRemaining,
  secondsRemaining: state.sessionSecondsRemaining,
  intervalId: state.intervalId
});

export default connect(mapStateToProps)(WorkTimer);
