import React, { Component } from 'react';
import { getUser } from '../../utils/apiCalls';
import './SignUpForm.css';

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
          newUserInput: {
            name: '',
            email: '',
            password: '',
          },
          newUser: {
            name: '',
            email: '',
            id: null
          },
          error: ''
        }
    }

    handleChange = (e) => {
      let newUserInfo = this.state.newUserInput;
      newUserInfo = {...newUserInfo, [e.target.name]: e.target.value}
        this.setState({newUserInput: newUserInfo})
    }

    submitForm = async (e) => {
        e.preventDefault();
        const createUser = await getUser(this.state.newUserInput, 'http://localhost:3001/api/v1/users')
          if(!createUser.ok) {
            const error = await createUser.json()
            console.log("ERROR in signup", error.error.detail)
            this.setState({error: error.error.detail || ''})
          } else {
            const newUser = await createUser.json()
            console.log("new User", newUser)
            this.setState({newUser:newUser || ''})
          }
        this.resetInputs()
    }

    resetInputs = () => {
      // this.setState({
      //         name: '',
      //         email: '',
      //         password: ''
      // })
      // this.setState({newUserInput: this.state.newUserInput(this.initialState)})
      this.setState({newUserInput: this.initialState})

    }

    render() {
      console.log("state", this.state)
        return (
            <>
            <form>
                <h2> Sign Up </h2>
                <input
                  className="name-input"
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={this.state.newUserInput.name}
                  onChange={this.handleChange}
                />
                <input
                  className="email-input"
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={this.state.newUserInput.email}
                  onChange={this.handleChange}
                />
                <input
                  className="password-input"
                  type="text"
                  placeholder="Enter Password"
                  name="password"
                  value={this.state.newUserInput.password}
                  onChange={this.handleChange}
                />
                <button onClick={(e) => this.submitForm(e)}> SIGN UP </button>
            </form>
              <p> {this.state.newUser.name} </p>
              <p> {this.state.error} </p>
            </>

        )
    }
}

export default SignUpForm;