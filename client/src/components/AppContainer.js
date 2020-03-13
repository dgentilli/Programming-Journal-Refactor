import React, { Component } from "react";
import About from './About';
import Input from './Input';
import Footer from './Footer';
import List from './List';

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
                <About />
                <Input />
                <List />
                <Footer />
            </div>
        );
    }
}

export default AppContainer;
