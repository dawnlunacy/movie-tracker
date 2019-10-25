import React, { Component } from 'react';
import { loginUser } from '../../utils/apiCall';
import './UserForm.css';

class UserForm extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                email: '',
                password: '',
            },
            error: ''
                
                
        }
    }

    handleChange = (e) => {
        let newUser = this.state.user;
      newUser = {...newUser, [e.target.name]: e.target.value}
        this.setState({user: newUser})
    }
    

    submitForm = async (e) => {
        e.preventDefault();
        const userVerification = await loginUser(this.state.user, 'http://localhost:3001/api/v1/login')
        .catch(error => console.log("error", error))
        console.log("ATTEMPTLOGIN", userVerification)
        this.resetInputs()
    }

    resetInputs = () => {
      this.setState({
          user: {
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
                <button onClick={(e) => this.submitForm(e)}> Create Profile </button>
            </form>
        )
    }
}

export default UserForm;

// <input
//     className="name-input"
//     type="text"
//     placeholder="Enter Name"
//     name="name"
//     value={this.state.user.name}
//     onChange={this.handleChange}
// />
