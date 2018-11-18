import acePomodoroReducer from './index';
import { 
  setSessionTimes, 
  getJwt, 
  countDownWorkTime, 
  countDownBreakTime ,
  setSessionName
} from '../actions/index';

describe('getJwt', () => {
  it('should store JSON web token', () => {
      let state = {
        jwt: ''
      };
      const token = 'tolkien';
      state = acePomodoroReducer(state, getJwt(token));
      expect(state).toEqual({
        jwt: 'tolkien'
      });
  });
});

describe('setSessionTimes', () => {
  it('should set the session times', () => {
      let state = {
        initialWorkMinutes: '',
        initialBreakMinutes: '',
      };
      const workTime = '25';
      const breakTime = '5';
      state = acePomodoroReducer(state, setSessionTimes(workTime, breakTime));
      expect(state).toEqual({
        initialWorkMinutes: '25',
        initialBreakMinutes: '5',
      });
  });
});

describe('countDownWorkTime', () => {
  it('should set the current work time remaining', () => {
      let state = {
        workTimeRemaining: 0
      };
      const workTime = '1:23';
      state = acePomodoroReducer(state, countDownWorkTime(workTime));
      expect(state).toEqual({
        workTimeRemaining: '1:23'
      });
  });
});

describe('countDownBreakTime', () => {
  it('should set the current break time remaining', () => {
      let state = {
        breakTimeRemaining: 0
      };
      const breakTime = '1:23';
      state = acePomodoroReducer(state, countDownBreakTime(breakTime));
      expect(state).toEqual({
        breakTimeRemaining: '1:23'
      });
  });
});

describe('setSessionName', () => {
  it('should set the session name', () => {
      let state = {
        sessionName: ''
      };
      const sessionName = 'studying';
      state = acePomodoroReducer(state, setSessionName(sessionName));
      expect(state).toEqual({
        sessionName: 'studying'
      });
  });
});