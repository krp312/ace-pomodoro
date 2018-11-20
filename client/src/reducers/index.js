import {
  LOGOUT_USER,
  GET_SESSIONS_REQUEST,
  GET_SESSIONS_SUCCESS,
  GET_SESSIONS_ERROR,
  POST_SESSIONS_ERROR,
  UPDATE_CREDENTIALS,
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  GET_JWT,
  SET_SESSION_TIMES,
  COUNT_DOWN_WORK_TIME,
  COUNT_DOWN_BREAK_TIME,
  SET_TIMER_TYPE,
  SET_SESSION_NAME,
  SAVE_POMO_SESSION_SUCCESS,
  SAVE_POMO_SESSION_ERROR,
  CLEAR_WORK_TIME_REMAINING,
  CLEAR_BREAK_TIME_REMAINING
} from '../actions/index';

const initialState = {
  jwt: null,
  workTimeRemaining: null,
  breakTimeRemaining: null,
  timerType: null,
  initialWorkMinutes: null,
  initialBreakMinutes: null,
  sessionName: null,
  savedSession: null,
  saveSessionError: null,
  username: null,
  password: null,
  loggedIn: false,
  sessions: [],
  loginUsername: null
};

export default (state = initialState, action) => {
  if (action.type === UPDATE_USERNAME) {
    return Object.assign({}, state, {
      loginUsername: action.name
    });
  } if (action.type === UPDATE_PASSWORD) {
    return Object.assign({}, state, {
      loginPassword: action.password
    });
  } if (action.type === LOGOUT_USER) {
    return {
      username: '',
      loggedIn: false
    };
  } if (action.type === UPDATE_CREDENTIALS) {
    return Object.assign({}, state, {
      username: action.username,
      password: action.password,
      loggedIn: true
    });
  } if (action.type === GET_SESSIONS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } if (action.type === GET_SESSIONS_SUCCESS) {
    return Object.assign({}, state, {
      sessions: action.sessions,
      loading: false,
      error: null
    });
  } if (action.type === GET_SESSIONS_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } if (action.type === POST_SESSIONS_ERROR) {
    return {
      ...state,
      error: action.error
    };
  } if (action.type === GET_JWT) {
    return Object.assign({}, state, {
      jwt: action.token,
    });
  } if (action.type === SET_SESSION_TIMES) {
    return Object.assign({}, state, {
      initialWorkMinutes: action.initialWorkMinutes,
      initialBreakMinutes: action.initialBreakMinutes,
      sessionName: action.sessionName
    });
  } if (action.type === COUNT_DOWN_WORK_TIME) {
    return Object.assign({}, state, {
      workTimeRemaining: action.workTimeRemaining
    });
  } if (action.type === COUNT_DOWN_BREAK_TIME) {
    return Object.assign({}, state, {
      breakTimeRemaining: action.breakTimeRemaining
    });
  } if (action.type === SET_TIMER_TYPE) {
    return Object.assign({}, state, {
      timerType: action.timerType
    });
  } if (action.type === SET_SESSION_NAME) {
    return Object.assign({}, state, {
      sessionName: action.sessionName
    });
  } if (action.type === SAVE_POMO_SESSION_SUCCESS) {
    return Object.assign({}, state, {
      savedSession: action.savedSession
    });
  } if (action.type === SAVE_POMO_SESSION_ERROR) {
    return Object.assign({}, state, {
      saveSessionError: action.error
    });
  } if (action.type === CLEAR_WORK_TIME_REMAINING) {
    return Object.assign({}, state, {
      workTimeRemaining: null
    });
  } if (action.type === CLEAR_BREAK_TIME_REMAINING) {
    return Object.assign({}, state, {
      breakTimeRemaining: null
    });
  }
  return state;
};
