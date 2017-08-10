import React from "react";
import { connect } from "react-redux";
import "./styles/break-timer.css";

export class BreakTimer extends React.Component {

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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  minutesRemaining: state.breakMinutesRemaining,
  secondsRemaining: state.breakSecondsRemaining
});

export default connect(mapStateToProps)(BreakTimer);
