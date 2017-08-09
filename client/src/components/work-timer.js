import React from 'react';
import { connect } from 'react-redux';
import './styles/work-timer.css';
import { submitPomodoro,showBreakTimer } from '../actions/actions'

export class WorkTimer extends React.Component {
  submitPomoForm(event) {
    event.preventDefault();
    this.props.history.push(`/break-timer`);
    this.props.dispatch(showBreakTimer());
  }

  render() {

    let {secondsRemaining, minutesRemaining} = this.props;
    return (
      <div className="work-timer">
        <p>this is the main pomo timer component for work period</p>
          <div className="clock" role="timer">
            <span className="minutes">{minutesRemaining < 10 ? '0' + minutesRemaining : minutesRemaining}</span>
            <span className="colon">:</span>
            <span className="seconds">{secondsRemaining < 10 ? '0' + secondsRemaining : secondsRemaining}</span>
          </div>
        <button className="break-timer-button" onClick={e => this.submitPomoForm(e)}>Start Break Timer</button>
      </div>
    )
  }
}

// When trying to access the state on this component make sure to check that reducer state 
// key(s) matches.
const mapStateToProps = (state) => (
  {
    minutesRemaining: state.minutesRemaining,
    secondsRemaining: state.secondsRemaining
})

export default connect(mapStateToProps)(WorkTimer);