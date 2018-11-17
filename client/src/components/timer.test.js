import React from 'react';
import { shallow, mount } from 'enzyme';
import { Timer } from './timer';
import { countDownWorkTime } from '../actions/index';

describe('<Timer />', () => {
  it('renders without crashing', () => {
    shallow(<Timer />);
  });

  // it('dispatches countDownWorkTime from countdownTimer', () => {
    // const dispatch = jest.fn();
    // const wrapper = mount(<Timer dispatch={dispatch} />);
    // expect(dispatch).toHaveBeenCalledWith(countDownWorkTime(0, 1, 'yeah'));
  // });
});
