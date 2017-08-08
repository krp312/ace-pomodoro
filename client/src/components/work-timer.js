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
    
    return (
      <div className="work-timer">
        <p>this is the main pomo timer component for work period</p>
          <div className="clock">
            <span className="minutes">25</span>
            <span className="colon">:</span>
            <span className="seconds">00</span>
          </div>
        <button className="break-timer-button" onClick={e => this.submitPomoForm(e)}>Break Timer</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
  // cheeses: state.cheeses.cheeses,
  // loading: state.cheeses.loading
})

export default connect(mapStateToProps)(WorkTimer);