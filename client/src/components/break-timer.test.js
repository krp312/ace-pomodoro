import React from 'react';
import {shallow} from 'enzyme';

import {BreakTimer} from './break-timer';

describe('<BreakTimer /> ', () => {
  it('Renders without crashing', () => {
    shallow(<BreakTimer />);
  });
})