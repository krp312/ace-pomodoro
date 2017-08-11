import React from 'react';
import { connect } from 'react-redux';
import './styles/set-pomo.css';
import {
  submitPomodoro,
  postSessionDuration,
  showBreakTimer,
  postSessionName,
  sendSessionDuration,
  stopPomoTimer,
  postBreakSetting,
  postWorkSetting,
  bindSessionLength,
  restartedSession
} from '../actions/actions';
import moment from 'moment';

// DRY this code up after getting initial restart pomo functionality setup
export class SetPomo extends React.Component {
  submitPomoForm(event) {
    event.preventDefault();
    this.props.history.push('/work-timer');
    if (this.props.activeSession){
      const workDuration = parseInt(this.props.initialMinutes);
      const breakDuration = parseInt(this.props.initialSeconds);
      const currentTime = new Date().getTime();
      const eventTime = new Date(
      currentTime - workDuration * 60000
    ).getTime();

      const formattedBreakDuration = moment
      .utc(breakDuration * 60000)
      .format('HH:mm:ss');

      const formattedWorkDuration = moment
      .utc(userDurationInput * 60000)
      .format('HH:mm:ss');
    
      let diffTime = eventTime - currentTime;
      let duration = moment.duration(diffTime, 'milliseconds');
    // Display starting time
      let setIntervalProps = this.props;
      const interval = 1000;
      const pomoIntervalId = setInterval(
      function() {
        // For live version: we want the condition set to 0
        if (Math.abs(duration) === 57000) {
          let elapsedTime = moment
            .utc(Math.abs(diffTime) - Math.abs(duration))
            .format('HH:mm:ss');
          setIntervalProps.dispatch(
            sendSessionDuration(
              elapsedTime,
              sessionName,
              formattedBreakDuration,
              formattedWorkDuration
              // this.props.username,
              // this.props.password
            )
          );
          clearInterval(pomoIntervalId);
          return null;
        }
        duration = moment.duration(duration + interval, 'milliseconds');
        setIntervalProps.dispatch(
          postSessionDuration(
            Math.abs(duration.minutes()),
            Math.abs(duration.seconds())
          )
        );
      },
      interval,
      setIntervalProps
    );
      this.props.dispatch(stopPomoTimer(pomoIntervalId));
      return null;
    }

    // When a prior session is not active this block executes:
    let sessionName = this.sessionName.value;

    // this.closure_username = this.props.username;
    // this.closure_password = this.props.password;

    this.props.dispatch(submitPomodoro());
    this.props.dispatch(postSessionName(sessionName));

    const breakDuration = parseInt(this.breakDuration.value);
    this.props.dispatch(postBreakSetting(breakDuration));
    const formattedBreakDuration = moment
      .utc(breakDuration * 60000)
      .format('HH:mm:ss');

    const userDurationInput = parseInt(this.durationInput.value);
    this.props.dispatch(postWorkSetting(userDurationInput));
    const formattedWorkDuration = moment
      .utc(userDurationInput * 60000)
      .format('HH:mm:ss');

    const currentTime = new Date().getTime();
    const eventTime = new Date(
      currentTime - userDurationInput * 60000
    ).getTime();
    let diffTime = eventTime - currentTime;
    let duration = moment.duration(diffTime, 'milliseconds');

    // Displays starting time difference to DOM
    this.props.dispatch(
      postSessionDuration(
        Math.abs(duration.minutes()),
        Math.abs(duration.seconds())
      )
    );

    // Bind original durations for timer restart
    this.props.dispatch(
      bindSessionLength(
        Math.abs(duration.minutes()),
        Math.abs(duration.seconds())
      )
    );

    let setIntervalProps = this.props;
    const interval = 1000;
    const pomoIntervalId = setInterval(
      function() {
        // For live version: we want the condition set to 0
        if (Math.abs(duration) === 57000) {
          let elapsedTime = moment
            .utc(Math.abs(diffTime) - Math.abs(duration))
            .format('HH:mm:ss');
          setIntervalProps.dispatch(
            sendSessionDuration(
              elapsedTime,
              sessionName,
              formattedBreakDuration,
              formattedWorkDuration
              // this.props.username,
              // this.props.password
            )
          );
          clearInterval(pomoIntervalId);
          return null;
        }
        duration = moment.duration(duration + interval, 'milliseconds');
        setIntervalProps.dispatch(
          postSessionDuration(
            Math.abs(duration.minutes()),
            Math.abs(duration.seconds())
          )
        );
      },
      interval,
      setIntervalProps
    );
    this.props.dispatch(stopPomoTimer(pomoIntervalId));
  }

  handleTimerStart(e){
    this.props.dispatch(restartedSession()); 
    // console.log('My log: ' + this.props.restartedSession); 
    this.submitPomoForm(e);
  }

  render() {
    return (
      <div className="set-pomo">
        {this.props.activeSession
          ? <button onClick={e => this.handleTimerStart(e)} className="start-timer-button" type="button">
            Start Timer!
            </button>
          : <div className="pomo-form">
              <p>
                <em>Set pomodoro work and break durations (minutes).</em>
              </p>
              <p>
                <em>
                  Label your pomodoro sessions to track your progress towards
                  your goals over time.
                </em>
              </p>
              <form onSubmit={e => this.submitPomoForm(e)}>
                <label htmlFor="sessionDuration"> Work duration: </label>
                <input
                  aria-label="Pomodoro duration"
                  type="text"
                  placeholder="25"
                  required
                  id="sessionDuration"
                  ref={input => (this.durationInput = input)}
                  defaultValue={this.props.workTime}
                />
                <label htmlFor="breakDuration"> Break duration: </label>
                <input
                  aria-label="Break duration"
                  type="text"
                  placeholder="5"
                  required
                  id="breakDuration"
                  ref={input => (this.breakDuration = input)}
                  defaultValue={this.props.breakTime}
                />
                <label htmlFor="sessionName">Session Name: </label>
                <input
                  aria-label="Pomodoro session name"
                  type="text"
                  placeholder="Develop Udemy Course"
                  id="sessionName"
                  required
                  ref={input => (this.sessionName = input)}
                  defaultValue={this.props.match.params.sessionId}
                />
                <button type="submit">Start Pomodoro</button>
              </form>
            </div>}
      </div>
    );
  }
}

// When trying to access the state on this component make sure to check that reducer state
// key(s) matches
const mapStateToProps = (state, ownProps) => {
  if (!state.sessions.sessionInfo) {
    return {
      activeSession: state.currentSessionName,
      restartedSession: state.restartedSession,
      initialMinutes: state.initialMinutes,
      initialSeconds: state.initialSeconds
      // username: state.username,
      // password: state.password
    };
  }

  const sessionObject = state.sessions.sessionInfo.filter(object => {
    return object.name === ownProps.match.params.sessionId;
  });

  return {
    activeSession: state.currentSessionName,
    restartedSession: state.restartedSession,
    initialMinutes: state.initialMinutes,
    initialSeconds: state.initialSeconds,
    workTime: sessionObject.length !== 0 ? sessionObject[0].work_duration.minutes : state.initialMinutes,
    breakTime: sessionObject.length !== 0 ? sessionObject[0].break_duration.minutes : state.initialMinutes,
    username: state.username,
    password: state.password
  };
};

export default connect(mapStateToProps)(SetPomo);
