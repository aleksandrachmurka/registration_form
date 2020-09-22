import React from 'react';
import Error from './Error';
import { shallow } from 'enzyme';

describe('<Error />', () => {
  let wrapper
  const props = {
    errors: [
      'Passwords must be identical.',
      'Email format is incorrect.'
    ],
  };

  beforeEach(() => {
    wrapper = shallow(<Error {...props} />)
  });

  it('should render paragraph for each error plus one', () => {
    expect(wrapper.find('p')).toHaveLength(3);
  });
  it('should display correct error message', () => {
    expect(wrapper.find('p').at(2).text()).toEqual('Email format is incorrect.');
  });
});