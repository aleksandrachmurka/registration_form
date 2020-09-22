import React from 'react';
import Form from './Form';
import Error from '../Error/Error';
import { shallow } from 'enzyme';

describe('<Form />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Form />)
  });

  it('should render properly', () => {
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('fieldset')).toHaveLength(1);
  });
  it('should not display Error component when no errors', () => {
    expect(wrapper.find(<Error />)).toHaveLength(0);
  })
});