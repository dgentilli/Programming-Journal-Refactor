import React from "react";
import { useChangeHandler } from "../hooks/useChangeHandler";

const Login = ({ handleLogin, changeEmail, changePassword, user }) => {
  let errMsg;
  !user.success ? (errMsg = user.msg) : (errMsg = null);
  return (
    <div id="login-control" className="login-signup-container">
      <h2>Login!</h2>
      <div>{errMsg}</div>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Enter an email address"
          onChange={(e) => changeEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter a password"
          onChange={(e) => changePassword(e.target.value)}
        />
        <div className=".btn-container">
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
