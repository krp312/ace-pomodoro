import React from "react";
import { connect } from "react-redux";
import "./styles/set-pomo.css";
import {
  submitPomodoro,
  postSessionDuration,
  showBreakTimer,
  postSessionName
} from "../actions/actions";
import moment from "moment";

export class SetPomo extends React.Component {
  submitPomoForm(event) {
    event.preventDefault();
    this.props.history.push(`/work-timer`);
    this.props.dispatch(submitPomodoro());
    this.props.dispatch(postSessionName(this.sessionName.value));

    const userDurationInput = parseInt(this.durationInput.value);
    const currentTime = new Date().getTime();
    const eventTime = new Date(
      currentTime - userDurationInput * 60000
    ).getTime();
    let diffTime = eventTime - currentTime;
    let duration = moment.duration(diffTime, "milliseconds");
    const interval = 1000;

    // Displays starting time difference to DOM
    this.props.dispatch(
      postSessionDuration(
        Math.abs(duration.minutes()),
        Math.abs(duration.seconds())
      )
    );

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
        <p>
          <em>Set pomodoro duration (minutes).</em>
        </p>
        <p>
          <em>Label your pomodoro sessions to track your goals.</em>
        </p>
        <form onSubmit={e => this.submitPomoForm(e)}>
          <input
            aria-label="Pomodoro duration"
            type="text"
            placeholder="25"
            required
            id="sessionDuration"
            ref={input => (this.durationInput = input)}
          />
          <input
            aria-label="Pomodoro session name"
            type="text"
            placeholder="Develop Udemy Course"
            id="sessionName"
            ref={input => (this.sessionName = input)}
          />
          <button type="submit">Start Pomodoro</button>
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
