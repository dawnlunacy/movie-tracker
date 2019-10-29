import React from 'react';
import { SignUpForm, mapDispatchToProps } from './SignUpForm';
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

  it('should reset newUserInput state when resetAllInputs is called', () => {
    const currentState = {
      name: 'Jeremiah',
      email: 'jerbear@gmail.com',
      password: 'secrets',
    }

    const expected = {
      name: '',
      email: '',
      password: '',
    }

    wrapper.instance().setState(currentState);
    wrapper.instance().resetAllInputs();

    expect(wrapper.state('newUserInput')).toEqual(expected);
  });

  it('should call checkInputsForValues when submitForm is called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().checkInputsForValues = jest.fn();

    wrapper.instance().submitForm(mockEvent);

    expect(wrapper.instance().checkInputsForValues).toHaveBeenCalled();
  });

// not working, must make checkInputsForValues false
  it('should set state when submitForm is called and form is NOT ready', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().checkInputsForValues = jest.fn();
    const expected = {error: "Please fill out all inputs to create an account."}

    wrapper.instance().submitForm(mockEvent);

    expect(wrapper.state('error')).toEqual(expected);
  });

// not working, must make checkInputsForValues true
  it('should call getUser and validateRespose when submitForm is called and form is ready', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().getUser = jest.fn();
    wrapper.instance().validateRespose = jest.fn();

    wrapper.instance().submitForm(mockEvent);

    expect(wrapper.instance().getUser).toHaveBeenCalled();
    expect(wrapper.instance().validateRespose).toHaveBeenCalled();
  });


// test things are called when validateRespose is called


});
