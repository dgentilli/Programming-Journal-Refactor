import React, { Component } from "react";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    render() {
        return (
            <div className="header-container">
                <h1>App Container</h1>
            </div>
        );
    }
}

export default AppContainer;
