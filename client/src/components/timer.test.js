import React from 'react';
import { shallow, mount } from 'enzyme';
import { Timer } from './timer';
import { countDownWorkTime } from '../actions/index';

describe('<Timer />', () => {
  it('renders without crashing', () => {
    shallow(<Timer dispatch={jest.fn()} />);
  });

  it('dispatches countDownWorkTime from countdownTimer', () => {
    const dispatch = jest.fn();
    mount(<Timer dispatch={dispatch} workTime={5} />);
    expect(dispatch).toHaveBeenCalledWith({"type": "COUNT_DOWN_WORK_TIME", "workTimeRemaining": "00:05:00"});
  });
});
