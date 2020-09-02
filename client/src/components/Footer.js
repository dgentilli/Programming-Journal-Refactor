import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./styles/footer.css";

const Footer = ({ isLoggedIn }) => {
  console.log("footer props", isLoggedIn);

  const inputLink = isLoggedIn ? "input" : "login-control";
  const journalLink = isLoggedIn ? "journal" : "login-control";

  return (
    <div className="footer-container">
      <div className="footer-nav-links">
        {/* <a href="#top">Go to Top</a>
        <a href={inputLink}>Create</a>
        <a href={journalLink}>Journal List</a> */}
        <Link
          className="logout-btn"
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Go To Top
        </Link>
        <Link
          className="logout-btn"
          activeClass="active"
          to={inputLink}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Create
        </Link>
        <Link
          className="logout-btn"
          activeClass="active"
          to={journalLink}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Journal List
        </Link>
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
};

export default Footer;
