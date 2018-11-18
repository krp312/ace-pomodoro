import React from "react";
import { connect } from "react-redux";
import "./styles/timer.css";
import { countDownWorkTime } from '../actions/index';
import { HMStoMilliseconds, millisecondsToHMS } from '../timer_helpers';

export class Timer extends React.Component {
  componentDidMount() {
    this.countdownTimer(0, this.props.workTime, 0);
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
      this.props.dispatch(countDownWorkTime(millisecondsToHMS(milliseconds)))
    };
    ticker();
    clock = setInterval(ticker, 1000);
  }

  render() {
    return (
      <div>
        {this.props.workTimeRemaining}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sessionName: state.sessionName,
  workTime: state.initialWorkMinutes,
  workTimeRemaining: state.workTimeRemaining
});

export default connect(mapStateToProps)(Timer);
