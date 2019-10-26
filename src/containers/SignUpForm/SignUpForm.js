import React, { Component } from 'react';
import { getUser } from '../../utils/apiCalls';

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
          name: '',
          email: '',
          password: '',
          id: Date.now(),
        }
    }

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value})
    }

    submitForm = (e) => {
        e.preventDefault();
        getUser(this.state, 'http://localhost:3001/api/v1/users')
        this.resetInputs()
    }

    resetInputs = () => {
      this.setState({
              name: '',
              email: '',
              password: ''
      })
    }

    render() {
      // console.log('state--->', this.state)
        return (
            <form>
                <input
                  className="name-input"
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <input
                  className="email-input"
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  className="password-input"
                  type="text"
                  placeholder="Enter Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button onClick={(e) => this.submitForm(e)}> SIGN UP </button>
            </form>
        )
    }
}

export default SignUpForm;