import React, { useState } from "react";
import Input from "./Input";
import Footer from "./Footer";
import About from "./About";

const LoginControl = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [isUser, setIsUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const submitSignupData = () => {
    const userData = JSON.stringify({
      email,
      password,
    });
    fetch("/api/author/signup", {
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
          setIsUser(true);
        }
      });
    });
  };

  const submitLoginData = () => {
    const userData = JSON.stringify({
      email,
      password,
    });
    fetch("/api/author/login", {
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
          setIsLoggedIn(true);
        }
      });
    });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    submitSignupData();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    submitLoginData();
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
            value={email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            value={password}
            onChange={handleInputChange}
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
            value={email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            value={password}
            onChange={handleInputChange}
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
