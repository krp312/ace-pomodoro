import React from 'react';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import {Header} from './header';

describe('<Header /> ', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  // it('Should call loginSubmit when login form is submitted', () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(<Header history={[]}loginSubmit ={callback}/>)
  //   const link = wrapper.find('.login-form')
  //   link.simulate('submit', {
  //     preventDefault() {}
  //   })
  //   expect(callback).toHaveBeenCalled();
  // });
})