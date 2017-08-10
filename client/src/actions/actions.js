export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  user
});

export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const loginUserError = message => ({
  type: LOGIN_USER_ERROR
});

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const createUserRequest = () => ({
  type: CREATE_USER_REQUEST
});

export const VIEW_USER_DATA = "VIEW_USER_DATA";
export const viewUserData = () => ({
  type: VIEW_USER_DATA
});

export const SUBMIT_POMODORO = "SUBMIT_POMODORO";
export const submitPomodoro = () => ({
  type: SUBMIT_POMODORO
});

export const POST_SESSION_DURATION = "POST_SESSION_DURATION";
export const postSessionDuration = (minutesRemaining, secondsRemaining) => ({
  type: POST_SESSION_DURATION,
  minutesRemaining,
  secondsRemaining
});

export const SHOW_POMO_INFO = "SHOW_POMO_INFO";
export const showPomoInfo = () => ({
  type: SHOW_POMO_INFO
});

export const SHOW_BREAK_TIMER = "SHOW_BREAK_TIMER";
export const showBreakTimer = () => ({
  type: SHOW_BREAK_TIMER
});

export const POST_BREAK_DURATION = "POST_BREAK_DURATION";
export const postBreakDuration = (minutesRemaining, secondsRemaining) => ({
  type: POST_BREAK_DURATION,
  minutesRemaining,
  secondsRemaining
});

export const POST_SESSION_NAME = "POST_SESSION_NAME";
export const postSessionName = sessionName => ({
  type: POST_SESSION_NAME,
  sessionName
});

// Calling this action allows stopping upon either 0 or upon pause/stop once those features
// Are implemented
export const STOP_POMO_TIMER = "STOP_POMO_TIMER";
export const stopPomoTimer = pomoIntervalId => ({
  type: STOP_POMO_TIMER,
  pomoIntervalId
});

//              SESSIONS
export const GET_SESSIONS_REQUEST = "GET_SESSIONS_REQUEST";
export const getSessionsRequest = () => ({
  type: GET_SESSIONS_REQUEST
});

export const GET_SESSIONS_SUCCESS = "GET_SESSIONS_SUCCESS";
export const getSessionsSuccess = sessions => ({
  type: GET_SESSIONS_SUCCESS,
  sessions
});

export const GET_SESSIONS_ERROR = "GET_SESSIONS_ERROR";
export const getSessionsError = error => ({
  type: GET_SESSIONS_ERROR,
  error
});

export const fetchSessions = () => dispatch => {
  console.log("fetch session action started");
  dispatch(getSessionsRequest());
  fetch("/api/sessions/")
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(sessions => {
      dispatch(getSessionsSuccess(sessions));
    })
    .catch(err => {
      dispatch(getSessionsError(err));
    });
};

// export const searchCharacters = name => dispatch => {
//     dispatch(searchCharactersRequest());
//     search(name)
//         .then(characters => dispatch(searchCharactersSuccess(characters)))
//         .catch(error => dispatch(searchCharactersError(error)));
// };

export const PAUSE_TIMER = "PAUSE_TIMER";
export const pauseTimer = () => ({
  type: PAUSE_TIMER,
});

export const POST_SESSIONS_ERROR = "POST_SESSIONS_ERROR";
export const postSessionsError = error => ({
  type: POST_SESSIONS_ERROR,
  error
});

// send over total work time and total break time
export const sendSessionDuration = (sessionDuration, sessionName) => {
  let formattedPostRequest = {
    name: sessionName,
    work_duration: "00:25:00",
    break_duration: "00:05:00",
    total_work_time: sessionDuration,
    // total_break_time: breakDuration,
    is_completed: true
  };

  // The User barackobama is hardcoded in for demo purposes
  const opts = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Basic bWFya3p1Y2s6ZmFjZWJvb2s="
    },
    method: "POST",
    body: JSON.stringify(formattedPostRequest)
  };
  return dispatch => {
    fetch("/api/sessions", opts)
      .then(function(res) {
        return res;
      })
    .catch(err => {
      dispatch(postSessionsError(err));
    });
  };
};
