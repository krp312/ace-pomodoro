import React from 'react';
import { connect } from 'react-redux';
import {
  countDownWorkTime,
  countDownBreakTime,
  setTimerType,
  savePomoSession
} from '../actions/index';
import { HMStoMilliseconds, millisecondsToHMS } from '../timer_helpers';
import './styles/timer.css';

export class Timer extends React.Component {
  componentDidMount() {
    const { timerType, initialWorkMinutes } = this.props;
    // start the work timer
    if (timerType === 'work') {
      this.countdownTimer(0, 0, initialWorkMinutes);
    }
  }

  componentDidUpdate() {
    const {
      timerType,
      workTimeRemaining,
      breakTimeRemaining,
      initialBreakMinutes,
      initialWorkMinutes,
      sessionName,
      dispatch
    } = this.props;
    // after the work timer has completed, set the timerType to `break`
    if (timerType === 'work' && workTimeRemaining === '00:00:00') {
      dispatch(setTimerType('break'));
    }
    // start the break timer
    if (timerType === 'break' && breakTimeRemaining === null) {
      this.countdownTimer(0, 0, initialBreakMinutes);
    }
    // when break timer ends, store session in database
    if (breakTimeRemaining === '00:00:00') {
      dispatch(
        savePomoSession(initialWorkMinutes, initialBreakMinutes, sessionName)
      );
    }
  }

  countdownTimer(hours, minutes, seconds) {
    const { timerType, dispatch } = this.props;
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
      if (timerType === 'work') {
        dispatch(countDownWorkTime(millisecondsToHMS(milliseconds)));
      } else {
        dispatch(countDownBreakTime(millisecondsToHMS(milliseconds)));
      }
    };
    ticker();
    clock = setInterval(ticker, 1000);
  }

  render() {
    const { timerType, workTimeRemaining, breakTimeRemaining } = this.props;
    let displayTimerType;

    if (timerType === 'work') {
      displayTimerType = workTimeRemaining;
    } else {
      displayTimerType = breakTimeRemaining;
    }

    return (
      <div>
        <div>{timerType}</div>
        <div>{displayTimerType}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialWorkMinutes: state.initialWorkMinutes,
  initialBreakMinutes: state.initialBreakMinutes,
  workTimeRemaining: state.workTimeRemaining,
  breakTimeRemaining: state.breakTimeRemaining,
  timerType: state.timerType,
  sessionName: state.sessionName
});

export default connect(mapStateToProps)(Timer);
