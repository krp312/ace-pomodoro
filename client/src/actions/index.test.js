import { 
  SET_SESSION_TIMES, 
  setSessionTimes,
  GET_JWT,
  getJwt,
  COUNT_DOWN_WORK_TIME,
  countDownWorkTime
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
    const sessionName = 'studying';
    const timerType = 'work';
    const action = setSessionTimes(workTime, breakTime, sessionName, timerType);
    expect(action.type).toEqual(SET_SESSION_TIMES);
    expect(action.initialWorkMinutes).toEqual(25);
    expect(action.initialBreakMinutes).toEqual(5);
    expect(action.sessionName).toEqual('studying');
    expect(action.timerType).toEqual('work');
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