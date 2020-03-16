import React, { Component } from "react";
import About from './About';
import Input from './Input';
import Footer from './Footer';
import List from './List';
import LoginControl from "./LoginControl";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    //Think about restructuring as such:
    //AppContainer will render About, LoginControl, and Footer
    //LoginControl responsibility: Render conditionally and pass props
    //Default isLoggedIn false
    ////Displays two components --> SignUp and Login
    //Once user Signs up or logs in
    ////Display Input and List

    render() {
        return (
            <div className="app-container">
                <About />
                <LoginControl />
                <Footer />
            </div>
        );
    }
}

export default AppContainer;
