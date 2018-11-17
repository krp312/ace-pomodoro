import React from "react";
import { connect } from "react-redux";
import "./styles/work-timer.css";
import countdownTimer from '../timer';

export class WorkTimer extends React.Component {
  submitPomoForm(event) {
    this.props.history.push(`/break-timer`);
  }

  render() {
    return (
      <div className="work-timer">
        {countdownTimer(0, 5, 0)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  minutesRemaining: state.sessionMinutesRemaining,
  secondsRemaining: state.sessionSecondsRemaining,
  intervalId: state.intervalId,
  paused: state.paused,
  breakDuration: state.breakDuration,
  sessionName: state.currentSessionName,
  workTime: state.initialWorkMinutes,
  breakTime: state.initialBreakMinutes
});

export default connect(mapStateToProps)(WorkTimer);
