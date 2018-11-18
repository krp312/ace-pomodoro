import React from 'react';
import { shallow, mount } from 'enzyme';
import { SetSessionTimes } from './set-session-times';
import { setSessionTimes } from '../actions/index';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<SetSessionTimes />', () => {
  it('renders without crashing', () => {
    shallow(<SetSessionTimes />);
  });

  it('dispatches setSessionTimes from submitSessionTimes', () => {
    // const dispatch = jest.fn();
    // const workTime = '25';
    // const breakTime = '5';
    // const wrapper = mount(
    //   <Router>
    //     <SetSessionTimes />
    //   </Router>
    // );
    // wrapper.find('input#initial-work-minutes').instance().value = workTime;
    // wrapper.find('input#initial-break-minutes').instance().value = breakTime;
    // wrapper.instance().submitSessionTimes();
    // expect(dispatch).toHaveBeenCalledWith(setSessionTimes(workTime, breakTime));
  });

  it('dispatches setTimerType from submitSessionTimes', () => {
  });

  it('dispatches setSessionName from submitSessionTimes', () => {
  });
});