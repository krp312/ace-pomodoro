import React from 'react';
import {shallow} from 'enzyme';

import {WorkTimer} from './work-timer';

describe('<WorkTimer /> ', () => {
  it('Renders without crashing', () => {
    shallow(<WorkTimer />);
  });
})