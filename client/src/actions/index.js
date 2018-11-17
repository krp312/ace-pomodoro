export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  user
});

export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const loginUserError = message => ({
  type: LOGIN_USER_ERROR
});

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = message => ({
  type: LOGOUT_USER
});

export const VIEW_USER_DATA = 'VIEW_USER_DATA';
export const viewUserData = () => ({
  type: VIEW_USER_DATA
});

export const SUBMIT_POMODORO = 'SUBMIT_POMODORO';
export const submitPomodoro = () => ({
  type: SUBMIT_POMODORO
});

export const POST_SESSION_DURATION = 'POST_SESSION_DURATION';
export const postSessionDuration = (minutesRemaining, secondsRemaining) => ({
  type: POST_SESSION_DURATION,
  minutesRemaining,
  secondsRemaining
});

export const SHOW_POMO_INFO = 'SHOW_POMO_INFO';
export const showPomoInfo = () => ({
  type: SHOW_POMO_INFO
});

export const SHOW_BREAK_TIMER = 'SHOW_BREAK_TIMER';
export const showBreakTimer = () => ({
  type: SHOW_BREAK_TIMER
});

export const POST_SESSION_NAME = 'POST_SESSION_NAME';
export const postSessionName = sessionName => ({
  type: POST_SESSION_NAME,
  sessionName
});

export const STOP_POMO_TIMER = 'STOP_POMO_TIMER';
export const stopPomoTimer = pomoIntervalId => ({
  type: STOP_POMO_TIMER,
  pomoIntervalId
});

export const GET_SESSIONS_REQUEST = 'GET_SESSIONS_REQUEST';
export const getSessionsRequest = () => ({
  type: GET_SESSIONS_REQUEST
});

export const GET_SESSIONS_SUCCESS = 'GET_SESSIONS_SUCCESS';
export const getSessionsSuccess = sessions => ({
  type: GET_SESSIONS_SUCCESS,
  sessions
});

export const GET_SESSIONS_ERROR = 'GET_SESSIONS_ERROR';
export const getSessionsError = error => ({
  type: GET_SESSIONS_ERROR,
  error
});

export const UPDATE_CREDENTIALS = 'UPDATE_CREDENTIALS';
export const updateCredentials = (username, password) => ({
  type: UPDATE_CREDENTIALS,
  username,
  password
});

export const PAUSE_TIMER = 'PAUSE_TIMER';
export const pauseTimer = () => ({
  type: PAUSE_TIMER,
});

export const POST_BREAK_SETTING = 'POST_BREAK_SETTING';
export const postBreakSetting = breakDuration => ({
  type: POST_BREAK_SETTING,
  breakDuration
});

export const POST_WORK_SETTING = 'POST_WORK_SETTING';
export const postWorkSetting = workDuration => ({
  type: POST_WORK_SETTING,
  workDuration
});

export const POST_SESSIONS_ERROR = 'POST_SESSIONS_ERROR';
export const postSessionsError = error => ({
  type: POST_SESSIONS_ERROR,
  error
});

export const STOP_BREAK_TIMER = 'STOP_BREAK_TIMER';
export const stopBreakTimer = (pomoIntervalId) => ({
  type: STOP_BREAK_TIMER,
  pomoIntervalId
});

export const RESTART_WORK_TIMER = 'RESTART_WORK_TIMER';
export const restartWorkTimer = () => ({
  type: RESTART_WORK_TIMER
});

export const BIND_SESSION_LENGTH = 'BIND_SESSION_LENGTH';
export const bindSessionLength = (minutes, seconds) => ({
  type: BIND_SESSION_LENGTH,
  minutes,
  seconds
});

export const RESET_STATE = 'RESET_STATE';
export const resetState = () => ({
  type: RESET_STATE
});

export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const updateUsername = (name) => ({
  type: UPDATE_USERNAME,
  name
});

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const updatePassword = (password) => ({
  type: UPDATE_PASSWORD,
  password
});

export const GET_JWT = 'GET_JWT';
export const getJwt = token => ({
  type: GET_JWT,
  token
});

export const SET_SESSION_TIMES = 'SET_SESSION_TIMES';
export const setSessionTimes = (initialWorkMinutes, initialBreakMinutes, sessionName) => ({
  type: SET_SESSION_TIMES,
  initialWorkMinutes,
  initialBreakMinutes,
  sessionName
});

export const UPDATE_SESSION_TIME_REMAINING = 'UPDATE_SESSION_TIME_REMAINING';
export const updateSessionTimeRemaining = sessionTimeRemaining => ({
  type: UPDATE_SESSION_TIME_REMAINING,
  sessionTimeRemaining
});

export const sendSessionDuration = (sessionDuration, sessionName, breakDurationSetting, workDurationSetting) => {
  let formattedPostRequest = {
    name: sessionName,
    work_duration: workDurationSetting,
    break_duration: breakDurationSetting,
    total_work_time: sessionDuration,
    is_completed: true
  };

  const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${window.encodedAuthHeader}`
    },
    method: 'POST',
    body: JSON.stringify(formattedPostRequest)
  };
  return dispatch => {
    fetch('/api/sessions', opts)
      .then(function(res) {
        return res;
      })
    .catch(err => {
      dispatch(postSessionsError(err));
    });
  };
};

export const sendBreakDuration = (breakDuration, sessionName) => {
  let formattedPostRequest = {
    name: sessionName,
    total_break_time: breakDuration,
  };
  const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${window.encodedAuthHeader}`
    },
    method: 'POST',
    body: JSON.stringify(formattedPostRequest)
  };
  return dispatch => {
    fetch('/api/sessions', opts)
      .then(function(res) {
        return res
      })
      .then(() => dispatch(resetState()))
    .catch(err => {
      return err
    });
  };
};

export const fetchSessions = (username, password) => dispatch => {
  const credentials = `${username}:${password}`;
  const encodedAuthHeader = btoa(credentials);
  const authString = `Basic ${encodedAuthHeader}`;

  const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authString
    },
    method: 'GET'
  };

  dispatch(getSessionsRequest());
  return fetch('/api/sessions/', opts)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(sessions => {
      return dispatch(getSessionsSuccess(sessions));
    })
    .catch(err => {
      dispatch(getSessionsError(err));
    });
};

export const createUser = (username, password) => dispatch => {
  const credentials = {
    username,
    password
  }

  const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(credentials)
  };

  return fetch('/api/users/', opts)
    .then(sessions => {
      return dispatch(getSessionsSuccess(sessions));
    })
};

export const loginUser = (username, password) => dispatch => {
  const credentials = {
    username,
    password
  }

  const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(credentials)
  };

  return fetch('/api/users/login', opts)
    .then(res => res.json())
    .then(({authToken}) => {
      return dispatch(getJwt(authToken))
    })
    .catch(err => {
      return err
    })
};
