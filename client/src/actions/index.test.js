import { 
  SET_SESSION_TIMES, 
  setSessionTimes,
  GET_JWT,
  getJwt
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
    const action = setSessionTimes(workTime, breakTime, sessionName);
    expect(action.type).toEqual(SET_SESSION_TIMES);
    expect(action.initialWorkMinutes).toEqual(25);
    expect(action.initialBreakMinutes).toEqual(5);
    expect(action.sessionName).toEqual('studying');
  });
});