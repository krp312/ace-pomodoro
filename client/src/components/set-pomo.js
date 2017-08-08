import React from "react";
import { connect } from "react-redux";
import "./styles/set-pomo.css";
import { submitPomodoro, postMinutes, postSeconds } from "../actions/actions";
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

    let setIntervalProps = this.props
    setInterval(function() {
      duration = moment.duration(duration + interval, "milliseconds");
      setIntervalProps.dispatch(postMinutes(Math.abs(duration.minutes())));
      setIntervalProps.dispatch(postSeconds(Math.abs(duration.seconds())));
      // console.log(Math.abs(duration.hours()) + ":" + Math.abs(duration.minutes()) + ":" + Math.abs(duration.seconds()));
    }, interval, setIntervalProps);
  }

  render() {
    return (
      <div className="set-pomo">
        <em>set pomo</em>
        <form onSubmit={e => this.submitPomoForm(e)}>
          <input
            type="text"
            placeholder="25"
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

const mapStateToProps = state => ({
minutes: state.minutes,
seconds: state.seconds
});
export default connect(mapStateToProps)(SetPomo);
