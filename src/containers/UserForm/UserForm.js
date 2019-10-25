import React, { Component } from 'react';
import { loginUser } from '../../utils/apiCalls';
import './UserForm.css';

class UserForm extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
    }

    handleChange = (e) => {
      let newUser = this.state.user;
      newUser = {...newUser, [e.target.name]: e.target.value}
        this.setState({user: newUser})
    }

    submitForm = (e) => {
        e.preventDefault();
        loginUser(this.state.user, 'http://localhost:3001/api/v1/login')
        this.resetInputs()
    }

    resetInputs = () => {
      this.setState({
          user: {
              name: '',
              email: '',
              password: ''
          }
      })
    }

    render() {
        return (
            <form>
                <input
                    className="email-input"
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={this.state.user.email}
                    onChange={this.handleChange}
                />
                <input
                    className="password-input"
                    type="text"
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.handleChange}
                />
                <button onClick={(e) => this.submitForm(e)}> LOGIN </button>
            </form>
        )
    }
}

export default UserForm;
