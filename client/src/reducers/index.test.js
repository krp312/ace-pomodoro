import acePomodoroReducer from './index';
import { setSessionTimes, getJwt } from '../actions/index';

describe('setSessionTimes', () => {
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
        sessionName: ''
      };
      const workTime = '25';
      const breakTime = '5';
      const sessionName = 'studying';
      state = acePomodoroReducer(state, setSessionTimes(workTime, breakTime, sessionName));
      expect(state).toEqual({
        initialWorkMinutes: '25',
        initialBreakMinutes: '5',
        sessionName: 'studying'
      });
  });
});