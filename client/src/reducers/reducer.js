import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  CREATE_USER_REQUEST,
  SUBMIT_POMODORO,
  VIEW_USER_DATA,
  SHOW_POMO_INFO,
  POST_SESSION_DURATION,
  SHOW_BREAK_TIMER,
  POST_BREAK_DURATION,
  POST_SESSION_NAME,
  GET_SESSIONS_REQUEST,
  GET_SESSIONS_SUCCESS,
  GET_SESSIONS_ERROR,
  STOP_POMO_TIMER,
  POST_SESSIONS_ERROR,
  PAUSE_TIMER,
  POST_BREAK_SETTING,
  POST_WORK_SETTING,
  RESET_STATE,
  STOP_BREAK_TIMER,
  RESTART_WORK_TIMER,
  BIND_SESSION_LENGTH,
  BIND_BREAK_LENGTH,
  RESTARTED_SESSION,
  UPDATE_CREDENTIALS
} from "../actions/actions";

const initialState = {
  user: "pomodoro_enthusiast",
  // user: '',
  loggedIn: true,
  sessions: [],
  display: "login",
  sessionMinutesRemaining: 0,
  sessionSecondsRemaining: 0,
  breakMinutesRemaining: 0,
  breakSecondsRemaining: 0,
  initialMinutes: null,
  initialSeconds: null,
  initialBreakMinutes: null,
  initialBreakSeconds: null,
  currentSessionName: null,
  breakDuration: null,
  workDuration: null,
  intervalId: null,
  breakId: null,
  paused: false,
  restartedSession: false
};
//d
export default (state, action) => {
  state = state || initialState;

  // LOGINS
  if (action.type === LOGIN_USER_REQUEST) {
    return {
      ...state,
      display: "setPomo"
    };
  } else if (action.type === LOGIN_USER_SUCCESS) {
    return {
      users: [...state.users, action.users],
      display: "setPomo",
      loading: false,
      error: null
    };
  } else if (action.type === LOGIN_USER_ERROR) {
    return {
      loading: false,
      error: action.message
    } 
  } else if (action.type === UPDATE_CREDENTIALS) {
    return Object.assign({}, state, {
      username: action.username,
      password: action.password,
      display: "setPomo"
    })
  } else if (action.type === CREATE_USER_REQUEST) {
    console.log("create user request");
    return {
      ...state
    };
  } else if (action.type === VIEW_USER_DATA) {
    console.log("checking user data");
    return {
      ...state,
      display: "userData"
    };
  } else if (action.type === SUBMIT_POMODORO) {
    console.log("submitted pomodoro");
    return {
      ...state,
      display: "workPomo"
    };
  } else if (action.type === POST_SESSION_DURATION) {
    return {
      ...state,
      sessionMinutesRemaining: action.minutesRemaining,
      sessionSecondsRemaining: action.secondsRemaining
    };
  } else if (action.type === SHOW_POMO_INFO) {
    console.log("pomoInfo");
    return {
      ...state,
      display: "pomoInfo"
    };
  } else if (action.type === SHOW_BREAK_TIMER) {
    console.log("break timer clicked");
    return {
      ...state,
      display: "breakTimer"
    };
  } else if (action.type === POST_BREAK_DURATION) {
    return {
      ...state,
      breakMinutesRemaining: action.minutesRemaining,
      breakSecondsRemaining: action.secondsRemaining
    };
  } else if (action.type === POST_BREAK_SETTING) {
    return {
      ...state,
      breakDuration: action.breakDuration
    };
  } else if (action.type === POST_WORK_SETTING) {
    return {
      ...state,
      workDuration: action.workDuration
    };
  } else if (action.type === POST_SESSION_NAME) {
    return {
      ...state,
      currentSessionName: action.sessionName
    };
  } else if (action.type === GET_SESSIONS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === GET_SESSIONS_SUCCESS) {
    return Object.assign({}, state, {
      sessions: action.sessions,
      loading: false,
      error: null
    });
  } else if (action.type === GET_SESSIONS_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === STOP_POMO_TIMER) {
    return {
      ...state,
      intervalId: action.pomoIntervalId
    };
  } else if (action.type === STOP_BREAK_TIMER) {
    return {
      ...state,
      breakId: action.pomoIntervalId
    };
  } else if (action.type === POST_SESSIONS_ERROR) {
    return {
      ...state,
      error: action.error
    };
  } else if (action.type === PAUSE_TIMER) {
    return {
      ...state,
      paused: !state.paused
    };
  } else if (action.type === RESET_STATE) {
    return {
      ...state,
      sessionMinutesRemaining: 0,
      sessionSecondsRemaining: 0,
      breakMinutesRemaining: 0,
      breakSecondsRemaining: 0,
      initialMinutes: null,
      initialSeconds: null,
      initialBreakMinutes: null,
      initialBreakSeconds: null,
      currentSessionName: null,
      breakDuration: null,
      workDuration: null,
      intervalId: null,
      breakId: null,
      paused: false,
      restartedSession: false
    };
  } else if (action.type === RESTART_WORK_TIMER) {
    return {
      ...state,
      sessionMinutesRemaining: state.initialMinutes,
      sessionSecondsRemaining: state.initialSeconds,
      breakMinutesRemaining: state.initialBreakMinutes,
      breakSecondsRemaining: state.initialBreakSeconds,
      intervalId: null,
      paused: false
    };
  } else if (action.type === BIND_SESSION_LENGTH) {
    return {
      ...state,
      initialMinutes: action.minutes,
      initialSeconds: action.seconds
    };
  } else if (action.type ===  BIND_BREAK_LENGTH) {
    return {
      ...state, 
      initialBreakMinutes: action.minutes,
      initialBreakSeconds: action.seconds
    }
  } else if (action.type === RESTARTED_SESSION) {
    return {
      ...state,
    restartedSession: true
    }
  }
  return state;
};
