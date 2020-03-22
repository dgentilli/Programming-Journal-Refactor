import React, { Component } from "react";
import Input from './Input';
import List from './List';


class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isUser: false,
            email: '',
            password: '',
            error: {},
            user: {}
        };
    }
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("Input Component State: ", this.state);
    }

    submitSignupData() {
        console.log("Submit User Data");
        const userData = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });
        console.log("userData: ", userData)
        fetch('/api/author/signup', {
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
                    this.setState({ user: userObject })
                    console.log("error state on failed response: ", this.state.error)
                } else {
                    this.setState({ isUser: true, user: userObject })
                    console.log("error state on success response: ", this.state.error)

                }
            })
        })
    }

    submitLoginData() {
        console.log("Submit User Data");
        const userData = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });
        fetch('/api/author/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: userData
        }).then(res => {
            console.log("Login server response: ", res)
            const resBody = res.json();
            Promise.resolve(resBody).then(userObject => {
                if (userObject.success === false) {
                    this.setState({ user: userObject })
                    console.log("this.state.user on failed login: ", this.state.user)
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
        this.submitLoginData();
    }

    handleUserClick = () => {
        this.setState({ isUser: !this.state.isUser });
    }

    logoutClick = () => {
        this.setState({ isLoggedIn: false, user: {} })
    }
    render() {
        let errMsg;
        !this.state.user.success ? (errMsg = this.state.user.msg) : (errMsg = null)
        let loginLogout;
        if (!this.state.isLoggedIn && this.state.isUser) {
            loginLogout = (
                <div id="login-control" className="login-signup-container">
                    <h2>Login!</h2>
                    <div>{errMsg}</div>
                    <form>
                        <input
                            type='email'
                            name='email'
                            placeholder="Enter an email address"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder="Enter a password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </form>
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.handleUserClick}>Go To Sign up</button>
                </div>)
        } else if (!this.state.isLoggedIn && !this.state.isUser) {
            loginLogout = (
                <div id="login-control" className="login-signup-container">
                    <h2>Sign Up!</h2>
                    <div>{errMsg}</div>
                    <form>
                        <input
                            type='email'
                            name='email'
                            placeholder="Enter an email address"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder="Enter a password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </form>
                    <div className=".btn-container">
                        <button onClick={this.handleSignup}>Sign up</button>
                        <button onClick={this.handleUserClick}>Go To Login</button>
                    </div>
                </div>
            )
        } else if (this.state.isLoggedIn) {
            loginLogout = (<div id="login-control" className="login-signup-container"><div className="logout-btn-container"><button id="logout-btn" onClick={this.logoutClick}>Logout</button></div></div>)
        }

        let display = (
            this.state.isLoggedIn ?
                <div>
                    <Input isLoggedIn={this.state.isLoggedIn} user={this.state.user} />
                </div> : null
        )
        return (
            <div>
                {loginLogout}
                {display}
            </div>
        );
    }
}

export default LoginControl;
