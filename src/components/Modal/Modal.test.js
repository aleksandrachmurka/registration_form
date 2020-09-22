import React from 'react';
import Modal from './Modal';
import Backdrop from '../Backdrop/Backdrop';
import { shallow } from 'enzyme';

describe('<Modal />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Modal />)
  });

  it('should render properly', () => {
    expect(wrapper.contains(<Backdrop />)).toEqual(true);
  });
  it('should show correct message depending on status', () => {
    wrapper.setProps({ status: 'success' });
    expect(wrapper.find('p').text()).toEqual('Registered successfully!');
  });
});