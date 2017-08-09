// features/frontend
// import {LOGIN_USER_REQUEST,
// LOGIN_USER_SUCCESS,
// LOGIN_USER_ERROR,
// CREATE_USER_REQUEST,
// SUBMIT_POMODORO,
// VIEW_USER_DATA,
// SHOW_POMO_INFO,
// POST_MINUTES,
// POST_SECONDS} from '../actions/actions'
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
  POST_SESSION_NAME
} from "../actions/actions";


const initialState = {
  users: [],
  display: "login",
  sessionMinutesRemaining: 0,
  sessionSecondsRemaining: 0,
  breakMinutesRemaining: 0,
  breakSecondsRemaining: 0,
  currentSessionName: ''
  //displays - login, userData, setPomo, workPomo, pomoInfo
};
//d
export default (state, action) => {
  state = state || initialState;
  // console.log('What type of action is being submitted: ' + action.type)

  // LOGINS
  if (action.type === LOGIN_USER_REQUEST) {
    console.log("login request");
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
  }
  else if (action.type === CREATE_USER_REQUEST) {
    console.log('create user request')
    return ({
      ...state
    })
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
  } else if ((action.type === SHOW_BREAK_TIMER)) {
    console.log("break timer clicked");
    return {
      ...state,
      display: "breakTimer"
    };
  } else if ((action.type === POST_BREAK_DURATION)) {
    return {
      ...state,
      breakMinutesRemaining: action.minutesRemaining,
      breakSecondsRemaining: action.secondsRemaining
    };
  } else if ((action.type === POST_SESSION_NAME)) {
    return {
      ...state,
      currentSessionName: action.sessionName
    }
  }
  return state;
};
