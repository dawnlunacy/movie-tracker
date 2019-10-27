import React from 'react';
import { LoginForm } from './LoginForm';
import { shallow } from 'enzyme';
// import { saveUser } from '../../actions/index';


describe('LoginFormContainer', () => {
  describe('AddTodoForm component', () => {
    let wrapper;
    // mockSaveUser = jest.fn();

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
  })
})
