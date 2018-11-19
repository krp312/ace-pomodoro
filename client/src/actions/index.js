export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () => ({
  type: LOGOUT_USER
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

export const POST_SESSIONS_ERROR = 'POST_SESSIONS_ERROR';
export const postSessionsError = error => ({
  type: POST_SESSIONS_ERROR,
  error
});

export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const updateUsername = name => ({
  type: UPDATE_USERNAME,
  name
});

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const updatePassword = password => ({
  type: UPDATE_PASSWORD,
  password
});

export const GET_JWT = 'GET_JWT';
export const getJwt = token => ({
  type: GET_JWT,
  token
});

export const SET_SESSION_TIMES = 'SET_SESSION_TIMES';
export const setSessionTimes = (initialWorkMinutes, initialBreakMinutes) => ({
  type: SET_SESSION_TIMES,
  initialWorkMinutes,
  initialBreakMinutes
});

export const SET_TIMER_TYPE = 'SET_TIMER_TYPE';
export const setTimerType = timerType => ({
  type: SET_TIMER_TYPE,
  timerType
});

export const SET_SESSION_NAME = 'SET_SESSION_NAME';
export const setSessionName = sessionName => ({
  type: SET_SESSION_NAME,
  sessionName
});

export const COUNT_DOWN_WORK_TIME = 'COUNT_DOWN_WORK_TIME';
export const countDownWorkTime = workTimeRemaining => ({
  type: COUNT_DOWN_WORK_TIME,
  workTimeRemaining
});

export const COUNT_DOWN_BREAK_TIME = 'COUNT_DOWN_BREAK_TIME';
export const countDownBreakTime = breakTimeRemaining => ({
  type: COUNT_DOWN_BREAK_TIME,
  breakTimeRemaining
});

export const saveSession = () => (dispatch) => {
  dispatch(savePomoSessionRequest());
  fetch('/board')
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((board) => {
      dispatch(savePomoSessionSuccess(board));
    })
    .catch((err) => {
      dispatch(savePomoSessionError(err));
    });
};

export const sendSessionDuration = (
  sessionDuration,
  sessionName,
  breakDurationSetting,
  workDurationSetting
) => {
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
  return (dispatch) => {
    fetch('/api/sessions', opts)
      .then(function(res) {
        return res;
      })
      .catch((err) => {
        dispatch(postSessionsError(err));
      });
  };
};

export const fetchSessions = (username, password) => (dispatch) => {
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
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((sessions) => {
      return dispatch(getSessionsSuccess(sessions));
    })
    .catch((err) => {
      dispatch(getSessionsError(err));
    });
};

export const createUser = (username, password) => (dispatch) => {
  const credentials = {
    username,
    password
  };

  const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(credentials)
  };

  return fetch('/api/users/', opts).then((sessions) => {
    return dispatch(getSessionsSuccess(sessions));
  });
};

export const loginUser = (username, password) => (dispatch) => {
  const credentials = {
    username,
    password
  };

  const opts = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(credentials)
  };

  return fetch('/api/users/login', opts)
    .then((res) => res.json())
    .then(({ authToken }) => {
      return dispatch(getJwt(authToken));
    })
    .catch((err) => {
      return err;
    });
};
