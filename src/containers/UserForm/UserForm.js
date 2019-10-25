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
            error: '',
            currentUser: ''
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
            if(!userVerification.ok) {
                const error = await userVerification.json()
                console.log("ERROR", error)
                this.setState({error: error.error})
            } else {
                const user = await userVerification.json()
                console.log("UV", user)
                this.setState({currentUser: user.name})
            }



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
            <>
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

            <p> {this.state.error} </p>
            <p> {this.state.currentUser} </p>
        </>
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
