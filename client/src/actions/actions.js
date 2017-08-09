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

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const createUserRequest = () => ({
  type: CREATE_USER_REQUEST,
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

export const sendSessionDuration = (sessionDuration, sessionName) => {
  let formattedPostRequest = {
    name: sessionName,
    work_duration: sessionDuration,
    break_duration: '00:05:00',
    is_completed: true
  }

  // The User barackobama is hardcoded in for demo purposes
  const opts = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic YmFyYWNrb2JhbWE6YmFza2V0YmFsbA=='
    },
    method: 'POST',
    body: JSON.stringify(formattedPostRequest)
  };
  return dispatch => {
    fetch('/api/sessions', opts)
      .then(function(res){
        return res;
      })
      .catch(err => {
        return err;
      })
  }
}