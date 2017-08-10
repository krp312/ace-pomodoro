import React from "react";
import { connect } from "react-redux";
import "./styles/break-timer.css";
import {resetState} from "../actions/actions";

export class BreakTimer extends React.Component {
restartSession(e) {
  console.log('click  ')
   clearInterval(this.props.intervalId);
   this.props.dispatch(resetState());
   this.props.history.push(`/work-timer`);
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
        <button onClick={e => this.restartSession(e)} className="restart-sesison-button" type="button">
          Restart Pomodoro Session
        </button>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  minutesRemaining: state.breakMinutesRemaining,
  secondsRemaining: state.breakSecondsRemaining,
  intervalId: state.breakId,
});

export default connect(mapStateToProps)(BreakTimer);
