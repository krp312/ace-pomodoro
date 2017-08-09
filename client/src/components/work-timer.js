import React from "react";
import { connect } from "react-redux";
import "./styles/work-timer.css";
import {
  submitPomodoro,
  showBreakTimer,
  postBreakDuration
} from "../actions/actions";
import moment from "moment";

export class WorkTimer extends React.Component {
  submitPomoForm(event) {
    event.preventDefault();
    this.props.history.push(`/break-timer`);
    this.props.dispatch(showBreakTimer());

    const currentTime = new Date().getTime();
    const eventTime = new Date(currentTime - 5 * 60000).getTime();
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
        <button
          className="break-timer-button"
          onClick={e => this.submitPomoForm(e)}
        >
          Start Break Timer
        </button>
      </div>
    );
  }
}

// When trying to access the state on this component make sure to check that reducer state
// key(s) matches.
const mapStateToProps = state => ({
  minutesRemaining: state.sessionMinutesRemaining,
  secondsRemaining: state.sessionSecondsRemaining
});

export default connect(mapStateToProps)(WorkTimer);
