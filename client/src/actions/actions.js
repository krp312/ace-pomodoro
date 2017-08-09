export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  user
});

export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const loginUserError = (message) => ({
  type: LOGIN_USER_ERROR,
});

export const VIEW_USER_DATA = 'VIEW_USER_DATA';
export const viewUserData = () => ({
  type: VIEW_USER_DATA,
});

export const SUBMIT_POMODORO = 'SUBMIT_POMODORO';
export const submitPomodoro = () => ({
  type: SUBMIT_POMODORO,
});

export const POST_SESSION_DURATION = 'POST_SESSION_DURATION';
export const postSessionDuration = (minutesRemaining, secondsRemaining) => ({
  type: POST_SESSION_DURATION,
  minutesRemaining,
  secondsRemaining
});

export const SHOW_POMO_INFO = 'SHOW_POMO_INFO';
export const showPomoInfo = () => ({
  type: SHOW_POMO_INFO,
});

// Add reducer handling for this action, console.logs, use login.js as ex. flow
export const SHOW_BREAK_TIMER = 'SHOW_BREAK_TIMER';
export const showBreakTimer = () => ({
  type: SHOW_BREAK_TIMER
})

export const POST_BREAK_DURATION = 'POST_BREAK_DURATION';
export const postBreakDuration = (minutesRemaining, secondsRemaining) => ({
  type: POST_BREAK_DURATION,
  minutesRemaining,
  secondsRemaining
});
// export const loginUserAttempt = (inputBody) => {
//   return (dispatch) => {
//     dispatch(loginUserRequest())
//     setTimeout(() => {
//       fetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({test: inputBody.value}),
//         headers: {
//           Accept: 'application/json',
//           'Content-type': 'application/json'
//         }
//       })
//       .then(response => response.json())
//       .then(users => dispatch(loginUserSuccess(inputBody.value)))
//       .catch(err => dispatch(loginUserError(err.message)))
//     }, 2000)
//   }
// }