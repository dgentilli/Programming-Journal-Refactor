import React from "react";

const Logout = ({ handleLogout }) => {
  return (
    <div id="login-control" className="login-signup-container">
      <div className="logout-btn-container">
        <button id="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        <button id="logout-btn">
          <a href="#journal">Journal List</a>
        </button>
        <button id="logout-btn">
          <a href="#about">About</a>
        </button>
      </div>
    </div>
  );
};

export default Logout;
