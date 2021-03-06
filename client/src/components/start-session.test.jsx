import React from 'react';
import { shallow, mount } from 'enzyme';
import { StartSession } from './start-session';
import {
  setSessionTimes,
  setTimerType,
  setSessionName
} from '../actions/index';

describe('<StartSession />', () => {
  const dispatch = jest.fn();
  const history = { push: jest.fn() };

  it('renders without crashing', () => {
    shallow(<StartSession dispatch={dispatch} history={history} />);
  });

  it('dispatches setSessionTimes from submitSession', () => {
    const workTime = '25';
    const breakTime = '5';
    const wrapper = mount(
      <StartSession dispatch={dispatch} history={history} />
    );
    wrapper.find('input#initial-work-minutes').instance().value = workTime;
    wrapper.find('input#initial-break-minutes').instance().value = breakTime;
    wrapper.instance().submitSession();
    expect(dispatch).toHaveBeenCalledWith(setSessionTimes(workTime, breakTime));
  });

  it('dispatches setTimerType from submitSession', () => {
    const timerType = 'work';
    const wrapper = mount(
      <StartSession dispatch={dispatch} history={history} />
    );
    wrapper.instance().submitSession();
    expect(dispatch).toHaveBeenCalledWith(setTimerType(timerType));
  });

  it('dispatches setSessionName from submitSession', () => {
    const workTime = 25;
    const breakTime = 5;
    const sessionName = 'play';
    const wrapper = mount(
      <StartSession dispatch={dispatch} history={history} />
    );
    wrapper.find('input#initial-work-minutes').instance().value = workTime;
    wrapper.find('input#initial-break-minutes').instance().value = breakTime;
    wrapper.find('input#session-name').instance().value = sessionName;
    wrapper.instance().submitSession();
    expect(dispatch).toHaveBeenCalledWith(setSessionName(sessionName));
  });
});
