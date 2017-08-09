import React from "react";
import { connect } from "react-redux";
import "./styles/set-pomo.css";
import {
  submitPomodoro,
  postSessionDuration,
  showBreakTimer
} from "../actions/actions";
import moment from "moment";

export class SetPomo extends React.Component {
  submitPomoForm(event) {
    event.preventDefault();
    this.props.history.push(`/work-timer`);
    this.props.dispatch(submitPomodoro());
    
    const userInput = parseInt(this.input.value);
    const currentTime = new Date().getTime();
    const eventTime = new Date(currentTime - userInput * 60000).getTime();
    let diffTime = eventTime - currentTime;
    let duration = moment.duration(diffTime, "milliseconds");
    const interval = 1000;

    let setIntervalProps = this.props;
    setInterval(
      function() {
        duration = moment.duration(duration + interval, "milliseconds");
        if (
          Math.abs(duration.seconds()) === 0 &&
          Math.abs(duration.minutes()) === 0
        ) {
          // Dispatch some action regarding stopping the current timer and displaying
          // The break timer page
          //  setIntervalProps.dispatch(showBreakTimer());
        }
        setIntervalProps.dispatch(
          postSessionDuration(
            Math.abs(duration.minutes()),
            Math.abs(duration.seconds())
          )
        );
        // console.log(Math.abs(duration.hours()) + ":" + Math.abs(duration.minutes()) + ":" + Math.abs(duration.seconds()));
      },
      interval,
      setIntervalProps
    );
  }

  render() {
    return (
      <div className="set-pomo">
        <em>set pomo</em>
        <form onSubmit={e => this.submitPomoForm(e)}>
          <input
            aria-label="Pomodoro duration"
            type="text"
            placeholder="25 minutes"
            required
            id="sessionDuration"
            ref={input => (this.input = input)}
          />
          <input type="text" placeholder="tag" id="sessionName" />
          <button type="submit">Set Pomodoro</button>
        </form>
      </div>
    );
  }
}

// When trying to access the state on this component make sure to check that reducer state 
// key(s) matches
// const mapStateToProps = state => ({
//   minutes: state.minutesRemaining,
//   seconds: state.secondsRemaining
// });
export default connect()(SetPomo);
