import React from 'react';
import { shallow, mount } from 'enzyme';
import { SetSessionTimes } from './set-session-times';
import { setSessionTimes } from '../actions/index';

describe('<SetSessionTimes />', () => {
  it('renders without crashing', () => {
    shallow(<SetSessionTimes />);
  });

  it('dispatches setSessionTimes from submitSessionTimes', () => {
    // const dispatch = jest.fn();
    // const workTime = '25';
    // const breakTime = '5';
    // const sessionName = 'yes';
    // const wrapper = mount(<SetSessionTimes dispatch={dispatch} />);
    // wrapper.find('input#initial-work-minutes').instance().value = workTime;
    // wrapper.find('input#initial-break-minutes').instance().value = breakTime;
    // wrapper.find('input#session-name').instance().value = sessionName;
    // wrapper.instance().submitSessionTimes();
    // expect(dispatch).toHaveBeenCalledWith(setSessionTimes(workTime, breakTime, sessionName));
  });

  it('dispatches setTimerType from submitSessionTimes', () => {
  });

  it('dispatches setSessionName from submitSessionTimes', () => {
  });
});