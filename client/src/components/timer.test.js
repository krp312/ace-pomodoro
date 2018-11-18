import React from 'react';
import { shallow, mount } from 'enzyme';
import { Timer } from './timer';

describe('<Timer />', () => {
  it('renders without crashing', () => {
    shallow(<Timer dispatch={jest.fn()} />);
  });

  it('dispatches countDownWorkTime from countdownTimer', () => {
    const dispatch = jest.fn();
    shallow(<Timer dispatch={dispatch} workTime={5} timerType={'work'} />);
    expect(dispatch).toHaveBeenCalledWith({"type": "COUNT_DOWN_WORK_TIME", "workTimeRemaining": "00:05:00"});
  });

  it('dispatches countDownBreakTime from countdownTimer', () => {
    const dispatch = jest.fn();
    shallow(<Timer dispatch={dispatch} breakTime={5} timerType={'break'} />);
    expect(dispatch).toHaveBeenCalledWith({"type": "COUNT_DOWN_BREAK_TIME", "breakTimeRemaining": "00:05:00"});
  });
});
