import React from 'react';
import { shallow, mount } from 'enzyme';
import { Timer } from './timer';

describe('<Timer />', () => {
  it('renders without crashing', () => {
    shallow(<Timer dispatch={jest.fn()} />);
  });

  it('dispatches countDownWorkTime from countdownTimer', () => {
    const dispatch = jest.fn();
    shallow(<Timer dispatch={dispatch} initialWorkMinutes={60} timerType={'work'} />);
    expect(dispatch).toHaveBeenCalledWith({"type": "COUNT_DOWN_WORK_TIME", "workTimeRemaining": "00:01:00"});
  });

  it('dispatches countDownBreakTime from countdownTimer', () => {
    // const dispatch = jest.fn();
    // shallow(<Timer 
    //   dispatch={dispatch} 
    //   initialWorkMinutes={1}
    //   initialBreakMinutes={60} 
    //   workTimeRemaining={'00:00:00'}
    //   breakTimeRemaining={null} 
    //   timerType={'break'} />);
    // expect(dispatch).toHaveBeenCalledWith({"type": "COUNT_DOWN_BREAK_TIME", "breakTimeRemaining": "00:01:00"});
  });

  it('dispatches setTimerType from componentDidUpdate()', () => {
  });
});
