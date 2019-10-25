import React from 'react';
import SignUpForm from './SignUpForm';
import { shallow } from 'enzyme';

describe('SignUpForm', () => {

  it('should match snapshot', () => {
    const wrapper = shallow(<SignUpForm />);

    expect(wrapper).toMatchSnapshot();
  })

})
