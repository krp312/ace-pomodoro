import React from "react";
import { connect } from "react-redux";
import { countDownWorkTime, countDownBreakTime, setTimerType } from '../actions/index';
import { HMStoMilliseconds, millisecondsToHMS } from '../timer_helpers';
import "./styles/timer.css";

export class Timer extends React.Component {
  componentDidMount() {
    // start the work timer
    if (this.props.timerType === 'work') {
      this.countdownTimer(0, 0, this.props.initialWorkMinutes);
    }
  }

  componentDidUpdate() {
    // after the work timer has completed, set the timerType to `break`
    if (this.props.timerType === 'work' && this.props.workTimeRemaining === '00:00:00') {
      this.props.dispatch(setTimerType('break'));
    }
    // start the break timer
    if (this.props.timerType === 'break' && this.props.breakTimeRemaining === null) {
      this.countdownTimer(0, 0, this.props.initialBreakMinutes);
    }
  }
      
  countdownTimer(hours, minutes, seconds) {
    let clock;
    const userInput = HMStoMilliseconds(hours, minutes, seconds);
    const startTime = new Date().getTime();
    const ticker = () => {
      const currentTime = new Date().getTime();
      if (currentTime - startTime >= userInput) {
        clearInterval(clock);
      }
      const milliseconds = startTime + userInput - currentTime;
      // the following `if` block is what displays the countdown timer
      if (this.props.timerType === 'work') {
        this.props.dispatch(countDownWorkTime(millisecondsToHMS(milliseconds)))
      } else {
        this.props.dispatch(countDownBreakTime(millisecondsToHMS(milliseconds)))
      }
    };
    ticker();
    clock = setInterval(ticker, 1000);
  }

  render() {
    let displayTimerType;

    if (this.props.timerType === 'work') {
      displayTimerType = this.props.workTimeRemaining
    } else {
      displayTimerType = this.props.breakTimeRemaining
    }

    return (
      <div>
        <div>{this.props.timerType}</div>
        <div>{displayTimerType}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialWorkMinutes: state.initialWorkMinutes,
  initialBreakMinutes: state.initialBreakMinutes,
  workTimeRemaining: state.workTimeRemaining,
  breakTimeRemaining: state.breakTimeRemaining,
  timerType: state.timerType
});

export default connect(mapStateToProps)(Timer);
