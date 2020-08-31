import React from "react";

const Footer = ({ isLoggedIn }) => {
  console.log("footer props", isLoggedIn);

  const inputLink = isLoggedIn ? "#input" : "#login-control";
  const journalLink = isLoggedIn ? "#journal" : "#login-control";

  return (
    <div className="footer-container">
      <div className="footer-nav-links">
        <a href="#top">Go to Top</a>
        <a href={inputLink}>Create</a>
        <a href={journalLink}>Journal List</a>
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
