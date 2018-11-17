import React from "react";
import { connect } from "react-redux";
import "./styles/break-timer.css";
import {resetState, restartWorkTimer} from "../actions/index";

export class BreakTimer extends React.Component {
restartSession(e) {
  clearInterval(this.props.intervalId);
  this.props.history.push(`/set-session-times`);
  this.props.dispatch(restartWorkTimer());
}

newPomo(e) {
     clearInterval(this.props.intervalId);
     this.props.dispatch(resetState());
     this.props.history.push(`/set-session-times`);
}
  render() {
    let { secondsRemaining, minutesRemaining } = this.props;
    return (
      <div className="break-timer">
        <div className="break-clock" role="timer">
          <span className="minutes">
            {minutesRemaining < 10 ? "0" + minutesRemaining : minutesRemaining}
          </span>
          <span className="colon">:</span>
          <span className="seconds">
            {secondsRemaining < 10 ? "0" + secondsRemaining : secondsRemaining}
          </span>
        </div>
        <button onClick={e => this.restartSession(e)} className="restart-session-button" type="button">
          Restart Pomo
        </button>
        <button onClick={e => this.newPomo(e)} className="new-pomo-button" type="button">
          New Pomo
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  minutesRemaining: state.breakMinutesRemaining,
  secondsRemaining: state.breakSecondsRemaining,
  intervalId: state.breakId,
  workDuration: state.workDuration,
  breakDuration: state.breakDuration
});

export default connect(mapStateToProps)(BreakTimer);
