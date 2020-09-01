import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = ({ isLoggedIn }) => {
  return (
    <div id="top" className="header-container">
      <div className="bg-image"></div>
      <div className="header-text-container">
        <h1>Daily Programming Journal</h1>
        <p>
          Every programmer needs a way to record lessons learned and document
          challenges encountered. This is the perfect way to chart your
          progress.
        </p>
        <div className="btn-container">
          <Link
            className="btn"
            activeClass="active"
            to="login-control"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Get Started
          </Link>
          <Link
            className="btn"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
