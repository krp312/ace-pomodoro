import React from "react";
import { connect } from "react-redux";
import "./styles/timer.css";
import { countDownWorkTime, countDownBreakTime } from '../actions/index';
import { HMStoMilliseconds, millisecondsToHMS } from '../timer_helpers';

export class Timer extends React.Component {
  componentDidMount() {
    if (this.props.timerType === 'work') {
      this.countdownTimer(0, this.props.workTime, 0);
    } else {
      this.countdownTimer(0, this.props.breakTime, 0);
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
    };
    ticker();
    clock = setInterval(ticker, 1000);
  }

  render() {
    let timerTypeDisplay;

    if (this.props.timerType === 'work') {
      timerTypeDisplay = this.props.workTimeRemaining
    } else {
      timerTypeDisplay = this.props.breakTimeRemaining
    }

    return (
      <div>
        {timerTypeDisplay}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sessionName: state.sessionName,
  workTime: state.initialWorkMinutes,
  breakTime: state.initialBreakMinutes,
  workTimeRemaining: state.workTimeRemaining,
  timerType: state.timerType
});

export default connect(mapStateToProps)(Timer);
