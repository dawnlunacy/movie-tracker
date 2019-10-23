import React, { Component } from 'react';
import './UserForm.css';

class UserForm extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitForm = (e) => {
        e.preventDefault();
        // this.props.addUser(this.state.user)
        // this.setState({
        //     user: {
        //         name: '',
        //         email: '',
        //         password: ''
        //     }
        // })
    }

    render() {
        return (
            <form>
                <input
                    className="name-input"
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={this.state.user.name}
                    onChange={(e) => this.handleChange(e)}
                />
                <input
                    className="email-input"
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={this.state.user.email}
                    onChange={(e) => this.handleChange(e)}
                />
                <input
                    className="password-input"
                    type="text"
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.user.password}
                    onChange={(e) => this.handleChange(e)}
                />
                <button onClick={(e) => this.submitForm(e)}> Create Profile </button>
            </form>
            //note this submit style is different than the redux lesson
        )
    }
}

export default UserForm;

