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

    render() {
        return (
            <div className="app-container">
                <LoginControl />
                <About />
                <Footer />
            </div>
        );
    }
}

export default AppContainer;
