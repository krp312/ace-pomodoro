import React from 'react';
import {shallow} from 'enzyme';

import {PomoInfo} from './pomo-info';

describe('<PomoInfo /> ', () => {
  it('Renders without crashing', () => {
    shallow(<PomoInfo />);
  });
})