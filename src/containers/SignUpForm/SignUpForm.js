import React, { Component } from 'react';
import { getUser } from '../../utils/apiCalls';
import { connect } from 'react-redux';
import { saveUser } from '../../actions/index';
import { Redirect, Link } from 'react-router-dom';
import './SignUpForm.css';

export class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
          newUserInput: {
            name: '',
            email: '',
            password: ''
          },
          error: '',
          formReady: false,
          isLogginIn: false,
        }
    }

    handleChange = (e) => {
      this.setState({error: ''})
      let newUserInfo = this.state.newUserInput;
      newUserInfo = {...newUserInfo, [e.target.name]: e.target.value}
      this.setState({newUserInput: newUserInfo})

    }

    async checkInputsForValues() {
      this.setState({formReady: false})
      if (this.state.newUserInput.name !== '' &&
        this.state.newUserInput.email !== '' &&
        this.state.newUserInput.password !== '') {
        this.setState({formReady: true})
      }
    }

    submitForm = async (e) => {
        e.preventDefault();
        await this.checkInputsForValues();
        if (!this.state.formReady ) {
          this.setState({error: "Please fill out all inputs to create an account."})
        } else {
          const createUser = await getUser(this.state.newUserInput, 'http://localhost:3001/api/v1/users')
          this.validateResponse(createUser)
        }
    }

    validateResponse = async (response) => {
      const { saveUser } = this.props;
      if (!response.ok) {
        if(response.status === 404) {
          this.setState({error: "There was a problem with the server. Please try again"})
        }
        const error = await response.json()
        if (error.error.detail.includes('email')) {
          this.setState({error: " That email is already taken " });
          this.resetEmailInput();
        }
      } else {
        const newUser = await response.json()
        saveUser(newUser);
        this.setState({isLogginIn: true})
        this.resetAllInputs()
      }
    }

    resetAllInputs = () => {
      this.setState({newUserInput: {
        name: '',
        email: '',
        password: '',
      }})
    }

    resetEmailInput = () => {
      this.setState({newUserInput: {
        name: this.state.newUserInput.name,
        email: '',
        password: this.state.newUserInput.password,
      }})
    }

    render() {
      if (this.state.isLogginIn) {
        return <Redirect to = '/' />
      }
        return (
            <>
            <form className="sign-up-form">
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
                <button className="form-btn" onClick={(e) => this.submitForm(e)}> SIGN UP
                </button>
                <h3> {this.state.error} </h3>
                <div className="login-to-sign-up">
                    <h4 className="prompt-to-login"> Already have an account? </h4>
                    <Link to="/login"> <button className="login-btn"> LOGIN </button> </Link>
                </div>
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
