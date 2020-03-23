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
                <div className="footer-nav-links">
                    <a href="#top">Go to Top</a>
                    <a href="#input">Create</a>
                    <a href="#journal">Journal List</a>
                    <a href="#logout-btn">Logout</a>
                </div>
                <p className="footer-projects">Check out more of my projects <a href="https://www.davegentilli.com/" target="_blank">here</a></p>
                <div className="copyright-container">Copyright &copy; {new Date().getFullYear()} Dave Gentilli</div>
            </div>
        );
    }
}

export default Footer;
