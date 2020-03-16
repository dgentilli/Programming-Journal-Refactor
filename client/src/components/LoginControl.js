import React, { Component } from "react";
import Input from './Input';
import List from './List';
import Login from './Login';
import Signup from './Signup';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            error: {},
            userObject: {}
        };
    }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("Input Component State: ", this.state);
    }

    submitSignupData() {
        console.log("Submit User Data");
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        fetch('/api/users/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: userData
        }).then(res => {
            console.log("Sign up server response: ", res)
            const resBody = res.json();
            Promise.resolve(resBody).then(userObject => {
                if (userObject.success === false) {
                    this.setState({ error: userObject.msg })
                } else {
                    this.setState({ isLoggedIn: true, user: userObject })
                }
            })
        })
    }
    handleSignup = e => {
        console.log("Handle Sign up Click");
        e.preventDefault();
        this.submitSignupData();
    }

    handleLogin = e => {
        console.log("Handle Login Click");
        e.preventDefault();
        this.submitData();
    }

    render() {
        let display = (
            this.state.isLoggedIn ? <div>
                <Input />
                <List />
            </div> :
                <div>
                    <h2>Sign Up!</h2>
                    <form>
                        <input
                            type='text'
                            name='email'
                            placeholder="Enter an email address"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type='text'
                            name='password'
                            placeholder="Enter a password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </form>
                    <button onClick={this.handleSignup}>Submit</button>
                    <form>
                        <input
                            type='text'
                            name='email'
                            placeholder="Enter an email address"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type='text'
                            name='password'
                            placeholder="Enter a password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </form>
                    <button onClick={this.handleLogin}>Submit</button>
                </div>
        )
        return (
            <div>
                {display}
            </div>
        );
    }
}

export default LoginControl;
