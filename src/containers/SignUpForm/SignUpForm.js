import React, { Component } from 'react';
import { getUser } from '../../utils/apiCalls';
import { connect } from 'react-redux';
import { saveUser } from '../../actions/index';
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
      this.setState({error: ''})
      let newUserInfo = this.state.newUserInput;
      newUserInfo = {...newUserInfo, [e.target.name]: e.target.value}
        this.setState({newUserInput: newUserInfo})
    }

    submitForm = async (e) => {
        e.preventDefault();
        const createUser = await getUser(this.state.newUserInput, 'http://localhost:3001/api/v1/users')
        this.validateResponse(createUser)
        this.resetInputs()
    }

    validateResponse = async (response) => {
      const { saveUser } = this.props;
      if (!response.ok) {
        if(response.status === 404) {
          this.setState({error: "There was a problem with the server. Please try again"})
        }
        const error = await response.json()
         if (error.error.detail.includes('email')) {
          this.setState({error: " That email is already taken " })
        } 
      } else {
        const newUser = await response.json()
        this.setState({newUser:newUser || ''});
        saveUser(this.state.newUser);
      }
    }

    resetInputs = () => {
      this.setState({newUserInput: {
        name: '',
        email: '',
        password: '',
      }})

    }

    render() {
        return (
            <>
            <form>
              <div className="sign-up-background">
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
                <h3> {this.state.error} </h3>
              </div>
            </form>
            </>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
  saveUser: currentUser => dispatch(saveUser(currentUser))
})

export default connect(null, mapDispatchToProps)(SignUpForm);