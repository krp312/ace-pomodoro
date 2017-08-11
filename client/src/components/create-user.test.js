import React from 'react';
import {shallow} from 'enzyme';

import {CreateUser} from './create-user';

describe('<CreateUser /> ', () => {
  it('Renders without crashing', () => {
    shallow(<CreateUser />);
  });
})