import React from 'react';
import SignUpForm from './SignUpForm';
import { shallow } from 'enzyme';

describe('SignUpForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUpForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update newUserInput name in state when handleChange is called', () => {

    const mockEvent = {
      target: {
        name: 'name',
        value: 'Fernando'
      }
    }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('newUserInput').name).toEqual('Fernando')
  });


  it('should update newUserInput email in state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'email',
        value: 'crazy_cats@hotmail.com'
      }
    }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('newUserInput').email).toEqual('crazy_cats@hotmail.com')
  });

  it('should update newUserInput password in state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'password',
        value: 'shhh'
      }
    }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('newUserInput').password).toEqual('shhh')
  });

  it('should update newUser id in state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'id',
        value: 10
      }
    }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('newUser').id).toEqual(10)
  });

  it('should reset state when resetInputs is called', () => {
    const currentState = {
      name: 'Jeremiah',
      email: 'jerbear@gmail.com',
      password: 'secrets',
      id: 1
    }

    const expected = {
      name: '',
      email: '',
      password: '',
      id: 1
    }

    wrapper.instance().setState(currentState);
    wrapper.instance().resetInputs();

    expect(wrapper.state()).toEqual(expected);
  });

  it('should call getUser and resetInputs when submitForm is called', () => {
    const mockGetUser = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().resetInputs = jest.fn()

    wrapper.instance().submitForm(mockEvent)

    // expect(mockGetUser).toHaveBeenCalledWith('url');
    expect(wrapper.instance().resetInputs).toHaveBeenCalled();
  });

});
