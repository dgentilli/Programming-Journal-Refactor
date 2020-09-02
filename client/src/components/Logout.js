import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./styles/login-signup-logout.css";

const Logout = ({ handleLogout }) => {
  return (
    <div id="login-control" className="login-signup-container">
      <div className="logout-btn-container">
        <Link onClick={handleLogout} className="logout-btn">
          Logout
        </Link>
        <Link
          className="logout-btn"
          activeClass="active"
          to="journal"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Journal List
        </Link>
        <Link
          className="logout-btn"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Logout;
