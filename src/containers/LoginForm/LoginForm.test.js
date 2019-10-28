import React from 'react';
import { LoginForm, mapDispatchToProps } from './LoginForm';
import { shallow } from 'enzyme';
import { getUser } from '../../utils/apiCalls';
import { saveUser } from '../../actions/index';
// jest.mock('../../actions/index');

console.log('getUser', getUser)
console.log('saveUser', saveUser)

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

    it('should call checkInputsForValues when submitForm is called', () => {
      const mockEvent = { preventDefault: jest.fn() };
      // console.log("Wrapper", wrapper.instance())
      getUser.mockImplementation(() => {
        return Promise.resolve([{id: 2, name:'Lacy', email:'rudd.lacy@gmail.com'}])
      })
      wrapper.instance().sumbitForm(mockEvent);

      expect(wrapper.instance().checkInputsForValues).toHaveBeenCalled();
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

    })  
  })
})
