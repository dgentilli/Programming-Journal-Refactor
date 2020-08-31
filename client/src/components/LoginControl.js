import React, { useState } from "react";
import Input from "./Input";
import Footer from "./Footer";
import About from "./About";
import { useChangeHandler } from "../hooks/useChangeHandler";

const LoginControl = () => {
  const { values, handleChange, reset } = useChangeHandler({
    email: "",
    password: "",
  });
  const [user, setUser] = useState({});
  const [isUser, setIsUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (route) => {
    const userData = JSON.stringify({
      email: values.email,
      password: values.password,
    });
    fetch(`/api/author/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
    }).then((res) => {
      const resBody = res.json();
      Promise.resolve(resBody).then((userObject) => {
        if (userObject.success === false) {
          setUser(userObject);
        } else {
          setUser(userObject);
          if (route === "signup") {
            setIsUser(true);
          } else {
            setIsLoggedIn(true);
          }
        }
      });
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    handleSubmit("signup");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    handleSubmit("login");
  };

  const handleUserClick = (e) => {
    e.preventDefault();
    setIsUser(!isUser);
  };

  const logoutClick = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  let errMsg;
  !user.success ? (errMsg = user.msg) : (errMsg = null);
  let loginLogout;
  if (!isLoggedIn && isUser) {
    loginLogout = (
      <div id="login-control" className="login-signup-container">
        <h2>Login!</h2>
        <div>{errMsg}</div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter an email address"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            value={values.password}
            onChange={handleChange}
          />
          <div className=".btn-container">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleUserClick}>Go To Sign up</button>
          </div>
        </form>
      </div>
    );
  } else if (!isLoggedIn && !isUser) {
    loginLogout = (
      <div id="login-control" className="login-signup-container">
        <h2>Sign Up!</h2>
        <div>{errMsg}</div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter an email address"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            value={values.password}
            onChange={handleChange}
          />
          <div className=".btn-container">
            <button onClick={handleSignup}>Sign up</button>
            <button onClick={handleUserClick}>Go To Login</button>
          </div>
        </form>
      </div>
    );
  } else if (isLoggedIn) {
    loginLogout = (
      <div id="login-control" className="login-signup-container">
        <div className="logout-btn-container">
          <button id="logout-btn" onClick={logoutClick}>
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
  }

  let display = isLoggedIn ? (
    <div>
      <Input isLoggedIn={isLoggedIn} user={user} />
    </div>
  ) : null;
  return (
    <div>
      {loginLogout}
      {display}
      <About />
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default LoginControl;
