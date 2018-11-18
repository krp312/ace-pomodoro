import { 
  SET_SESSION_TIMES, 
  setSessionTimes,
  GET_JWT,
  getJwt,
  COUNT_DOWN_WORK_TIME,
  countDownWorkTime,
  COUNT_DOWN_BREAK_TIME,
  countDownBreakTime,
  SET_SESSION_NAME,
  setSessionName
} from "./index";

describe('getJwt', () => {
  it('should return the action', () => {
    const token = 'chuckecheese';
    const action = getJwt(token);
    expect(action.type).toEqual(GET_JWT);
    expect(action.token).toEqual(token);
  });
});

describe('setSessionTimes', () => {
  it('should return the action', () => {
    const workTime = 25;
    const breakTime = 5;
    const action = setSessionTimes(workTime, breakTime);
    expect(action.type).toEqual(SET_SESSION_TIMES);
    expect(action.initialWorkMinutes).toEqual(25);
    expect(action.initialBreakMinutes).toEqual(5);
  });
});

describe('countDownWorkTime', () => {
  it('should return the action', () => {
    const timeRemaining = '1:23';
    const action = countDownWorkTime(timeRemaining);
    expect(action.type).toEqual(COUNT_DOWN_WORK_TIME);
    expect(action.workTimeRemaining).toEqual(timeRemaining);
  });
});

describe('countDownBreakTime', () => {
  it('should return the action', () => {
    const timeRemaining = '1:23';
    const action = countDownBreakTime(timeRemaining);
    expect(action.type).toEqual(COUNT_DOWN_BREAK_TIME);
    expect(action.breakTimeRemaining).toEqual(timeRemaining);
  });
});

describe('setSessionName', () => {
  it('should return the action', () => {
    const sessionName = 'studying';
    const action = setSessionName(sessionName);
    expect(action.type).toEqual(SET_SESSION_NAME);
    expect(action.sessionName).toEqual('studying');
  });
});