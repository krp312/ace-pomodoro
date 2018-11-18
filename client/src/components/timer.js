import React from "react";
import { connect } from "react-redux";
import "./styles/timer.css";
import { countDownWorkTime, countDownBreakTime, setTimerType } from '../actions/index';
import { HMStoMilliseconds, millisecondsToHMS } from '../timer_helpers';

export class Timer extends React.Component {
  componentDidMount() {
    if (this.props.timerType === 'work') {
      this.countdownTimer(0, 0, this.props.initialWorkMinutes);
    } else {
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
      if (this.props.timerType === 'work') {
        this.props.dispatch(countDownWorkTime(millisecondsToHMS(milliseconds)))
      } else {
        this.props.dispatch(countDownBreakTime(millisecondsToHMS(milliseconds)))
      }
      if (this.props.workTimeRemaining == '00:00:00') {
        this.props.dispatch(setTimerType('break'));
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
        {this.props.timerType}
        {displayTimerType}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sessionName: state.sessionName,
  initialWorkMinutes: state.initialWorkMinutes,
  initialBreakMinutes: state.initialBreakMinutes,
  workTimeRemaining: state.workTimeRemaining,
  breakTimeRemaining: state.breakTimeRemaining,
  timerType: state.timerType
});

export default connect(mapStateToProps)(Timer);
