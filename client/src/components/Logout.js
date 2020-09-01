import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Logout = ({ handleLogout }) => {
  return (
    <div id="login-control" className="login-signup-container">
      <div className="logout-btn-container">
        {/* <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button> */}
        <Link onClick={handleLogout} className="logout-btn">
          Logout
        </Link>
        {/* <button id="logout-btn">
          <a href="#journal">Journal List</a>
        </button> */}
        <Link
          className="logout-btn"
          activeClass="active"
          to="journal"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Journal List
        </Link>
        {/* <button id="logout-btn">
          <a href="#about">About</a>
        </button> */}
        <Link
          className="logout-btn"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Logout;
