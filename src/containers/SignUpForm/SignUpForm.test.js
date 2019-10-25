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

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('name')).toEqual('Fernando')
  });

  it('should update name in state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'email',
        value: 'crazy_cats@hotmail.com'
      }
    }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('email')).toEqual('crazy_cats@hotmail.com')
  });

  it('should update name in state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'password',
        value: 'shhh'
      }
    }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('password')).toEqual('shhh')
  });

  it('should update name in state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'id',
        value: 10
      }
    }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('id')).toEqual(10)
  });

});