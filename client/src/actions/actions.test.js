import {
  LOGIN_USER_REQUEST,
  loginUserRequest,
  LOGIN_USER_SUCCESS,
  loginUserSuccess,
  LOGIN_USER_ERROR,
  loginUserError,
  CREATE_USER_REQUEST,
  createUserRequest,
  VIEW_USER_DATA,
  viewUserData,
  SUBMIT_POMODORO,
  submitPomodoro,
  SHOW_POMO_INFO,
  showPomoInfo,
  POST_SESSION_DURATION,
  postSessionDuration,
  SHOW_BREAK_TIMER,
  showBreakTimer,
  POST_BREAK_DURATION,
  postBreakDuration,
  POST_SESSION_NAME,
  postSessionName,
  GET_SESSIONS_REQUEST,
  GET_SESSIONS_SUCCESS,
  GET_SESSIONS_ERROR,
  STOP_POMO_TIMER,
  POST_SESSIONS_ERROR,
  postSessionsError,
  PAUSE_TIMER,
  POST_BREAK_SETTING,
  postBreakSetting,
  POST_WORK_SETTING,
  postWorkSetting,
  RESET_STATE,
  STOP_BREAK_TIMER,
  RESTART_WORK_TIMER,
  BIND_SESSION_LENGTH,
  BIND_BREAK_LENGTH,
  UPDATE_CREDENTIALS,
  updateCredentials
} from "./actions";

// describe('', () => {
// it('Should return the action', () => {
//   const action =
//   expect(action.type).toEqual()
//   })
// })
describe("Show break timer", () => {
  it('Should return the action', () => {
  const action = showBreakTimer();
  expect(action.type).toEqual(SHOW_BREAK_TIMER);
  })
})

describe("Post session data", () => {
  it("Should return the action", () => {
    const workDuration = 25;
    const action = postWorkSetting(workDuration)
    expect(action.workDuration).toEqual(workDuration)
    expect(action.type).toEqual(POST_WORK_SETTING);
  });
  it("Should return the action", () => {
    const breakDuration = 5;
    const action = postBreakSetting(breakDuration);
    expect(action.breakDuration).toEqual(breakDuration);
    expect(action.type).toEqual(POST_BREAK_SETTING);
  });
  it("Should return the action", () => {
    const minutesRemaining = 1;
    const secondsRemaining = 0;
    const action = postSessionDuration(minutesRemaining, secondsRemaining);
    expect(action.type).toEqual(POST_SESSION_DURATION);
    expect(action.minutesRemaining).toEqual(minutesRemaining);
    expect(action.secondsRemaining).toEqual(secondsRemaining);
  });
  it("Should return the action", () => {
    const minutesRemaining = 1;
    const secondsRemaining = 0;
    const action = postBreakDuration(minutesRemaining, secondsRemaining);
    expect(action.type).toEqual(POST_BREAK_DURATION);
    expect(action.minutesRemaining).toEqual(minutesRemaining);
    expect(action.secondsRemaining).toEqual(secondsRemaining);
  });
  it("Should return the action", () => {
    const sessionName = "Write unit tests";
    const action = postSessionName(sessionName);
    expect(action.type).toEqual(POST_SESSION_NAME);
    expect(action.sessionName).toEqual(sessionName);
  });
  it("Should return the action", () => {
    const error = "Awful error message";
    const action = postSessionsError(error);
    expect(action.type).toEqual(POST_SESSIONS_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("Pomodoro Submission", () => {
  it("Should return the action", () => {
    const action = submitPomodoro();
    expect(action.type).toEqual(SUBMIT_POMODORO);
  });
});

describe("Display Pomodoro Info", () => {
  it("Should return the action", () => {
    const action = showPomoInfo();
    expect(action.type).toEqual(SHOW_POMO_INFO);
  });
});

describe("User Login", () => {
  it("Should return the action", () => {
    const action = loginUserRequest();
    expect(action.type).toEqual(LOGIN_USER_REQUEST);
  });
  it("Should return the action", () => {
    const user = "evan1234";
    const action = loginUserSuccess(user);
    expect(action.type).toEqual(LOGIN_USER_SUCCESS);
    expect(action.user).toEqual(user);
  });
  it("Should return the action", () => {
    const action = loginUserError();
    expect(action.type).toEqual(LOGIN_USER_ERROR);
  });
});

describe("User Creation", () => {
  it("Should return the action", () => {
    const action = createUserRequest();
    expect(action.type).toEqual(CREATE_USER_REQUEST);
  });
});

describe("View User Data", () => {
  it("Should return the action", () => {
    const action = viewUserData();
    expect(action.type).toEqual(VIEW_USER_DATA);
  });
});

describe("Update user credentials", () => {
  it("Should return the action", () => {
    const username = "myUsername";
    const password = "password";
    const action = updateCredentials(username, password);
    expect(action.username).toEqual(username);
    expect(action.password).toEqual(password);
    expect(action.type).toEqual(UPDATE_CREDENTIALS);
  });
});