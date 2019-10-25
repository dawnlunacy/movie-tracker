import React, { Component } from 'react';
import { getUser } from '../../utils/apiCalls';

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
          newUser: {
            name: '',
            email: '',
            password: '',
          },
          error: ''
        }
    }

    handleChange = (e) => {
      let newUser = this.state.newUser;
      newUser = {...newUser, [e.target.name]: e.target.value}
        this.setState({newUser: newUser})
    }

    submitForm = async (e) => {
        e.preventDefault();
        const createUser = await getUser(this.state.newUser, 'http://localhost:3001/api/v1/users')
          if(!createUser.ok) {
            const error = await createUser.json()
            console.log("ERROR in signup", error.error.detail)
            this.setState({error: error.error.detail})
          } else {
            const newUser = await createUser.json()
            this.setState({newUser})
          }
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
        return (
            <>
            <form>
                <input
                  className="name-input"
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={this.state.newUser.name}
                  onChange={this.handleChange}
                />
                <input
                  className="email-input"
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={this.state.newUser.email}
                  onChange={this.handleChange}
                />
                <input
                  className="password-input"
                  type="text"
                  placeholder="Enter Password"
                  name="password"
                  value={this.state.newUser.password}
                  onChange={this.handleChange}
                />
                <button onClick={(e) => this.submitForm(e)}> SIGN UP </button>
            </form>
              <p> {this.state.newUser.name} </p>
              <p> {this.state.error}</p>
            </>

        )
    }
}

export default SignUpForm;