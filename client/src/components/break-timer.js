import React from "react";
import { connect } from "react-redux";
import "./styles/break-timer.css";
// import { fetchCheeses } from '../actions/cheese'

export class BreakTimer extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchCheeses())
  // }

  render() {
    let { secondsRemaining, minutesRemaining } = this.props;
    return (
      <div className="break-timer">
        <p>this is the main pomo timer component for the break period</p>
        <div className="clock" role="timer">
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
