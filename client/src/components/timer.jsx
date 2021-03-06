import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  countDownWorkTime,
  countDownBreakTime,
  setTimerType,
  savePomoSession,
  clearWorkTimeRemaining,
  clearBreakTimeRemaining,
  clearSavedSession
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
      dispatch,
      savedSession
    } = this.props;
    // after the work timer has completed, set the timerType to `break`
    if (timerType === 'work' && workTimeRemaining === '00:00:0-1') {
      dispatch(setTimerType('break'));
    }
    // when break timer ends, store session in database
    if (breakTimeRemaining === '00:00:0-1' && savedSession === null) {
      dispatch(
        savePomoSession(initialWorkMinutes, initialBreakMinutes, sessionName)
      );
    }
    if (timerType === 'work' && workTimeRemaining === null) {
      this.countdownTimer(0, 0, this.props.initialWorkMinutes);
    }
  }

  countdownTimer(hours, minutes, seconds) {
    const { timerType, dispatch } = this.props;
    let clock;
    const userInput = HMStoMilliseconds(hours, minutes, seconds);
    const startTime = new Date().getTime();
    const ticker = () => {
      const currentTime = new Date().getTime();
      if (currentTime - startTime - 1000 >= userInput) {
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

  restartTimer() {
    const { dispatch } = this.props;
    dispatch(clearSavedSession());
    dispatch(clearWorkTimeRemaining());
    dispatch(clearBreakTimeRemaining());
    dispatch(setTimerType('work'));
  }

  startBreakTimer() {
    const {
      timerType,
      breakTimeRemaining,
      initialBreakMinutes
    } = this.props;
    if (timerType === 'break' && breakTimeRemaining === null) {
      this.countdownTimer(0, 0, initialBreakMinutes);
    }
  }

  render() {
    const { timerType, workTimeRemaining, breakTimeRemaining, savedSession } = this.props;
    let displayTimerType;

    if (timerType === 'work') {
      displayTimerType = workTimeRemaining;
    } else {
      displayTimerType = breakTimeRemaining;
    }

    return (
      <div>
        <div>{savedSession !== null ? <button onClick={this.restartTimer.bind(this)}>Restart</button> : null}</div>
        <div>{savedSession !== null ? <button onClick={this.restartTimer.bind(this)}><Link to="/start-session">New</Link></button> : null}</div>
        <div>{timerType === 'break' && breakTimeRemaining === null ? <button onClick={this.startBreakTimer.bind(this)}>Begin Break</button> : null}</div>
        <div>{timerType}</div>
        <div>{displayTimerType}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialWorkMinutes: state.initialWorkMinutes,
  initialBreakMinutes: state.initialBreakMinutes,
  workTimeRemaining: state.workTimeRemaining,
  breakTimeRemaining: state.breakTimeRemaining,
  timerType: state.timerType,
  sessionName: state.sessionName,
  savedSession: state.savedSession
});

export default connect(mapStateToProps)(Timer);
