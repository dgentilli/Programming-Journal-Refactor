import React, { Component } from "react";
import About from './About';

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
            </div>
        );
    }
}

export default AppContainer;
