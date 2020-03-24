import React, { Component } from "react";
import Input from './Input';
import Footer from './Footer';
import About from './About';

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
    }

    submitSignupData() {
        const userData = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });
        fetch('/api/author/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: userData
        }).then(res => {
            const resBody = res.json();
            Promise.resolve(resBody).then(userObject => {
                if (userObject.success === false) {
                    this.setState({ user: userObject })
                } else {
                    this.setState({ isUser: true, user: userObject })
                }
            })
        })
    }

    submitLoginData() {
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
            const resBody = res.json();
            Promise.resolve(resBody).then(userObject => {
                if (userObject.success === false) {
                    this.setState({ user: userObject })
                } else {
                    this.setState({ isLoggedIn: true, user: userObject })
                }
            })
        })
    }
    handleSignup = e => {
        e.preventDefault();
        this.submitSignupData();
    }

    handleLogin = e => {
        e.preventDefault();
        this.submitLoginData();
    }

    handleUserClick = (e) => {
        e.preventDefault();
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
                        <div className='.btn-container'>
                            <button onClick={this.handleLogin}>Login</button>
                            <button onClick={this.handleUserClick}>Go To Sign up</button>
                        </div>
                    </form>
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
                        <div className=".btn-container">
                            <button onClick={this.handleSignup}>Sign up</button>
                            <button onClick={this.handleUserClick}>Go To Login</button>
                        </div>
                    </form>
                </div>
            )
        } else if (this.state.isLoggedIn) {
            loginLogout = (<div id="login-control" className="login-signup-container"><div className="logout-btn-container"><button id="logout-btn" onClick={this.logoutClick}>Logout</button><button id="logout-btn"><a href="#journal">Journal List</a></button><button id="logout-btn"><a href="#about">About</a></button></div>
            </div>)
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
                <About />
                <Footer isLoggedIn={this.state.isLoggedIn} />
            </div>
        );
    }
}

export default LoginControl;
