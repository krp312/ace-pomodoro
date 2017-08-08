import React from 'react';
import { connect } from 'react-redux';
import './styles/work-timer.css';
import { submitPomodoro } from '../actions/actions'

export class WorkTimer extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(fetchCheeses())
  // }
  submitPomoForm(event) {
    event.preventDefault();
    this.props.history.push(`/break-timer`);
    this.props.dispatch(submitPomodoro());
  }

  render() {
    console.log('this stuff' + this.props.secondsRemaining)
    return (
      <div className="work-timer">
        <p>this is the main pomo timer component for work period</p>
          <div className="clock">
            <span className="minutes">{this.props.minutesRemaining ? this.props.minutesRemaining : 0}</span>
            <span className="colon">:</span>
            <span className="seconds">{this.props.secondsRemaining ? this.props.secondsRemaining : 0}</span>
          </div>
        <button className="break-timer-button" onClick={e => this.submitPomoForm(e)}>Break Timer</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    minutesRemaining: state.minutesRemaining,
    secondsRemaining: state.secondsRemaining
})

export default connect(mapStateToProps)(WorkTimer);