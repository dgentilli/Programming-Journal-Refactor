import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    render() {
        return (
            <div className="header-container">
                <div className="bg-image"></div>
                <div className="header-text-container">
                    <h1>Daily Programming Journal</h1>
                    <p>Every programmer needs a way to record lessons learned and document challenges encountered. This is the perfect way to chart your progress.</p>
                    <div className="btn-container">
                        <a href="#login-control" class="btn">Get Started</a>
                        <a href="#about" class="btn">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
