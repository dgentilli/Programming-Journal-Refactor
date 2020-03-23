import React, { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    render() {
        return (
            <div className="footer-container">
                <a href="#top">Back to Top</a>
                <a href="#input">Input Form</a>
                <a href="#journal">Journal List</a>
                <p>Check out more of my projects <a href="https://www.davegentilli.com/">here</a></p>
                Copyright &copy; {new Date().getFullYear()} Dave Gentilli
            </div>
        );
    }
}

export default Footer;
