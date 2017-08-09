import React from "react";
import { connect } from "react-redux";
import "./styles/set-pomo.css";
import {
  submitPomodoro,
  postSessionDuration,
  showBreakTimer,
  postSessionName,
  sendSessionDuration
} from "../actions/actions";
import moment from "moment";

export class SetPomo extends React.Component {
  submitPomoForm(event) {
    event.preventDefault();
        let sessionName = this.sessionName.value;

    this.props.history.push(`/work-timer`);
    this.props.dispatch(submitPomodoro());
    this.props.dispatch(postSessionName(sessionName));

    const userDurationInput = parseInt(this.durationInput.value);
    const currentTime = new Date().getTime();
    const eventTime = new Date(
      currentTime - userDurationInput * 60000
    ).getTime();
    let diffTime = eventTime - currentTime;
    let duration = moment.duration(diffTime, "milliseconds");

    // Displays starting time difference to DOM
    this.props.dispatch(
      postSessionDuration(
        Math.abs(duration.minutes()),
        Math.abs(duration.seconds())
      )
    );

    let setIntervalProps = this.props;
    const interval = 1000;
    setInterval(
      function() {
        // console.log('elapsed time: ' + (Math.abs(diffTime) - Math.abs(duration)))
          // let elapsedTime = (Math.abs(diffTime) - Math.abs(duration));
          // console.log('Formatted elapsed time:  ' + moment.utc(elapsedTime).format('HH:mm:ss'));
        // console.log('should be positive duration' + duration);
          // let elapsedTime = moment.utc(Math.abs(diffTime) - Math.abs(duration)).format('HH:mm:ss');
          // console.log('Formatted elapsed time:  ' + elapsedTime);
        if (Math.abs(duration) === 59000) {
          let elapsedTime = moment.utc(Math.abs(diffTime) - Math.abs(duration)).format('HH:mm:ss');
          // console.log('Formatted elapsed time:  ' + elapsedTime);

          // setIntervalProps.dispatch(sendBoolToggle());
            // Backend endpoint /api/sessions/:id: reveives {isCompleted: true}
          setIntervalProps.dispatch(sendSessionDuration(elapsedTime, sessionName));
          return null;
        }
          duration = moment.duration(duration + interval, "milliseconds");
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
