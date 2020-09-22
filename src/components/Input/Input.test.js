import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';

describe('<Input />', () => {
  let wrapper
  const props = {
    input: {
      label: 'Username',
      placeholder: 'Enter username',
    }

  }
  beforeEach(() => {
    wrapper = shallow(<Input {...props} />)
  });
  it('should render properly', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
  it('should render correct label', () => {
    expect(wrapper.find('label').text()).toEqual('Username');
  });
  it('should render input with correct placeholder attribute', () => {
    expect(wrapper.find('input').prop('placeholder')).toEqual('Enter username');
  });
});