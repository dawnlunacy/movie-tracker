import React from 'react';
import { SignUpForm, mapDispatchToProps } from './SignUpForm';
import { shallow } from 'enzyme';
import { saveUser } from '../../actions/index';


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

  it.skip('should call saveUser and resetAllInputs when submitForm is called', () => {
    // const mockSaveUser = jest.fn()
    // let mockResponse = {
    //   "id": 3,
    //   "name": "Lucy",
    //   "email": "lawless@turing.io"
    // };

    // beforeEach(() => {
    //   window.fetch = jest.fn().mockImplementation(() => {
    //     return Promise.resolve({
    //       ok: true,
    //       json: () => Promise.resolve(mockResponse)
    //     });
    //   });
    // });
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().resetAllInputs = jest.fn()
    wrapper.instance().submitForm = jest.fn();
    wrapper.instance().forceUpdate();

    wrapper.instance().submitForm(mockEvent)

    expect(wrapper.instance().validateResponse()).toHaveBeenCalled();
    expect(wrapper.instance().resetAllInputs).toHaveBeenCalled();
    wrapper.find('button').at(0).simulate('click', mockEvent);
    expect(wrapper.instance().submitForm).toHaveBeenCalled();

  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an saveUser action when validateResponse is called with a successful response', () => {
      const mockDispatch = jest.fn();
      const mockResponse = {
        "id": 23,
        "name": "Blink182",
        "email": "noOneLikesYou@whenYou're23.com"
    }

      const actionToDispatch = saveUser(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.saveUser(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  // quinne
  it('should call checkInputsForValues when submitForm is called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().checkInputsForValues = jest.fn();

    wrapper.instance().submitForm(mockEvent);

    expect(wrapper.instance().checkInputsForValues).toHaveBeenCalled();
  });

// not working, must make checkInputsForValues false
  it.skip('should set state when submitForm is called and form is NOT ready', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().checkInputsForValues = jest.fn();
    const expected = {error: "Please fill out all inputs to create an account."}

    wrapper.instance().submitForm(mockEvent);

    expect(wrapper.state('error')).toEqual(expected);
  });

// not working, must make checkInputsForValues true
  it.skip('should call getUser and validateRespose when submitForm is called and form is ready', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().getUser = jest.fn();
    wrapper.instance().validateRespose = jest.fn();

    wrapper.instance().submitForm(mockEvent);

    expect(wrapper.instance().getUser).toHaveBeenCalled();
    expect(wrapper.instance().validateRespose).toHaveBeenCalled();
  });

});
