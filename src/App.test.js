import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App/>', () => {
  const wrapper = shallow(<App />)
  it('should render properly', () => {
    expect(wrapper.find('.app')).toHaveLength(1);
  });
});
