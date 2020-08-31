import React from "react";
import ToggleButton from "./ToggleButton";
import { useChangeHandler } from "../hooks/useChangeHandler";

const SignUp = ({
  handleSignup,
  changeEmail,
  changePassword,
  user,
  isUser,
  toggleButton,
}) => {
  let errMsg;
  !user.success ? (errMsg = user.msg) : (errMsg = null);
  return (
    <div id="login-control" className="login-signup-container">
      <h2>Signup!</h2>
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
          <button onClick={handleSignup}>Signup</button>
          <ToggleButton isUser={isUser} toggleButton={toggleButton} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
