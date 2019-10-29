import React from 'react';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import { shallow } from 'enzyme';
import { saveUser } from '../../actions/index';

describe('LoginFormContainer', () => {
  describe('AddTodoForm component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<LoginForm />)
    })

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should set state of UserInput email when handleChange is called with an event', () => {
      const emailEvent = {
        target: {
          name: "email",
          value: "rudd.lacy@gmail.com"
        }
      }

      wrapper.instance().handleChange(emailEvent);

      expect(wrapper.state('userInput').email).toEqual(emailEvent.target.value);
      })

    it('should set state of UserInput password when handleChange is called with an event', () => {

      const passwordEvent = {
        target: {
         name: "password",
         value: "password"
        }
      }

    wrapper.instance().handleChange(passwordEvent);

    expect(wrapper.state('userInput').password).toEqual(passwordEvent.target.value);
    })

    it('should reset state of errors when handleChange is called', () => {
      const defaultState = {
        userInput: {
            email: 'mooses@forest.io',
            password: 'MooseIsBetterThanPants',
        },
        error: 'Username or password incorrect',
        formReady: false,
        isLoggedIn: false
      }
      const expected = {
        userInput: {
            email: 'mooses@forest.io',
            password: 'MoosesAreWAYBetterThanPants',
        },
        error: '',
        formReady: false,
        isLoggedIn: false
      }

      const passwordEvent = {
        target: {
         name: "password",
         value: "MoosesAreWAYBetterThanPants"
        }
      }

      wrapper.instance().setState(defaultState);

      wrapper.instance().handleChange(passwordEvent);

      expect(wrapper.state()).toEqual(expected);
    })

    it('should reset state of userInputs when resetInputs is called', () => {
      const defaultState = {
        userInput: {
            email: 'mooses@forest.io',
            password: 'MooseIsBetterThanPants',
        },
        error: '',
        formReady: false,
        isLoggedIn: false
      }
      const expected = {
        userInput: {
            email: '',
            password: '',
        },
        error: '',
        formReady: false,
        isLoggedIn: false
      }

      wrapper.instance().setState(defaultState);

      wrapper.instance().resetInputs();

      expect(wrapper.state()).toEqual(expected);
    })

    it('should call submitForm is when the login button is clicked', () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().submitForm = jest.fn();

      wrapper.find('button').at(0).simulate('click', mockEvent);

      expect(wrapper.instance().submitForm).toHaveBeenCalled();
    });

    it('should call validateResponse from submitForm', () => {
      const mockEvent = { preventDefault: jest.fn() };
      
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an saveUser action when validateResponse is called with a successful response', () => {
      const mockDispatch = jest.fn();
      const mockResponse = {
        "id": 3,
        "name": "Lacy",
        "email": "rudd.lacy@gmail.com"
    }

      const actionToDispatch = saveUser(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.saveUser(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
