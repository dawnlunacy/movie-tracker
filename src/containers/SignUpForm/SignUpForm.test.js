import React from 'react';
import SignUpForm from './SignUpForm';
import { shallow } from 'enzyme';

describe('SignUpForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUpForm/>); 
  });

  it('should match snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should update name in state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'name',
        value: 'Fernando'
      }
    }

    // wrapper.instance().handleChange = jest.fn();
    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('name')).toEqual('Fernando')
  })

})