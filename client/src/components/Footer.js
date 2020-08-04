import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isLoggedIn: this.props.isLoggedIn,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      this.setState({ isLoggedIn: !this.state.isLoggedIn });
    }
  }

  inputLink() {
    if (this.state.isLoggedIn) {
      return "#input";
    } else {
      return "#login-control";
    }
  }

  journalLink() {
    if (this.state.isLoggedIn) {
      return "#journal";
    } else {
      return "#login-control";
    }
  }

  render() {
    return (
      <div className="footer-container">
        <div className="footer-nav-links">
          <a href="#top">Go to Top</a>
          <a href={this.inputLink()}>Create</a>
          <a href={this.journalLink()}>Journal List</a>
        </div>
        <p className="footer-projects">
          Check out more of my projects{" "}
          <a href="https://www.davegentilli.com/" target="_blank">
            here
          </a>
        </p>
        <div className="copyright-container">
          Copyright &copy; {new Date().getFullYear()} Dave Gentilli
        </div>
      </div>
    );
  }
}

export default Footer;
