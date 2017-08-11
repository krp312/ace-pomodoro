import {
  LOGIN_USER_REQUEST,
  loginUserRequest,
  LOGIN_USER_SUCCESS,
  loginUserSuccess,
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
  UPDATE_CREDENTIALS
} from "./actions";

describe('User Login', () => {
  it('Should return the action', () => {
    const action = loginUserRequest();
    expect(action.type).toEqual(LOGIN_USER_REQUEST);
  })
  it('Should return the action', () => {
    const user = 'evan1234';
    const action = loginUserSuccess(user);
    expect(action.type).toEqual(LOGIN_USER_SUCCESS);
    expect(action.user).toEqual(user);
  })
})