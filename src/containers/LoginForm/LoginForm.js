import React, { Component } from 'react';
import { fetchData, getUser } from '../../utils/apiCalls';
import { connect } from 'react-redux';
import { saveUser, retrieveFavorited } from '../../actions/index';
import { Redirect, Link } from 'react-router-dom';
import './LoginForm.css';

export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            userInput: {
                email: '',
                password: '',
            },
            error: '',
            formReady: false,
            isLoggedIn: false

        }
      }

    handleChange = (e) => {
      this.setState({error: ''})
      let userInput = this.state.userInput;
      userInput = {...userInput, [e.target.name]: e.target.value}
      this.setState({userInput: userInput})
    }

    async checkInputsForValues() {
      this.setState({error: ''})     
      this.setState({formReady: false})
      if (this.state.userInput.email !== '' &&
        this.state.userInput.password !== '') {
        this.setState({formReady: true})
            }
    }

    submitForm = async (e) => {
        e.preventDefault();
        await this.checkInputsForValues();    
        if (!this.state.formReady) {
          this.setState({error: "Please fill out all inputs to log in."})
        } else {
          const userVerification = await getUser(this.state.userInput, 'http://localhost:3001/api/v1/login');
          this.validateResponse(userVerification)
        }
        
      }
      
      validateResponse = async (response) => {
        const { saveUser, retrieveFavorited } = this.props;
        if (!response.ok && response.status === 404) {
          this.setState({error: "There was a problem with the server. Please try again"})
        }
        if (!response.ok) {
          const error = await response.json()
          this.setState({error: error.error})
        } else {
          const newUser = await response.json()
          saveUser(newUser);
          this.setState({isLoggedIn: true})
          const moviesToSave = await this.getFavorites(newUser.id)
          console.log('movietosave===>>', moviesToSave.favorites)
          retrieveFavorited(moviesToSave.favorites)
          this.resetInputs()
        }
      }

      getFavorites = async (id) => {
        // const { currentUser } = this.props
        // if(currentUser === null) {
          // return
        // } else {
          const favoriteMovies = await fetchData(`http://localhost:3001/api/v1/users/${id}/moviefavorites`)
          console.log('in getFavorites--->>>', favoriteMovies)
          return favoriteMovies
        // }
      }

    resetInputs = () => {
      this.setState({
          userInput: {
              email: '',
              password: ''
          }
      })
    }


    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to = '/' />
        }
        return (
            <>
            <form className="login-form">
                <div className="log-in-background">
                <h2> Login </h2>
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
                <button className="form-btn" onClick={(e) => this.submitForm(e)}> LOGIN </button>

                <h3> {this.state.error} </h3>
                <div className="login-to-sign-up">
                    <h4 className="prompt-to-sign-up"> Don't have an account? </h4>    
                    <Link to ="/signup"> <button className="sign-up-btn"> SIGN UP</button> </Link>
                </div>
                </div>
            </form>
        </>
        )
    }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export const mapDispatchToProps = dispatch => ({
  retrieveFavorited: favorited => dispatch(retrieveFavorited(favorited)),
  saveUser: currentUser => dispatch(saveUser(currentUser))
})

export default connect(null, mapDispatchToProps)(LoginForm)
