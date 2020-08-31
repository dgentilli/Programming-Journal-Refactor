import React, { useState } from "react";
import Input from "./Input";
import Footer from "./Footer";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import { useChangeHandler } from "../hooks/useChangeHandler";

const LoginControl = () => {
  const { values, handleChange, reset } = useChangeHandler({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [isUser, setIsUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (route) => {
    console.log("handleSUbmit route", route);
    const userData = JSON.stringify({
      email: email,
      password: password,
    });
    console.log("handleSubmit, userData", userData);
    fetch(`/api/author/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
    }).then((res) => {
      console.log("handleSubmit, server resp", res);
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
            setEmail("");
            setPassword("");
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
    console.log("handle login runs");
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

  let loginSignup;
  if (!isLoggedIn && isUser) {
    loginSignup = (
      <Login
        user={user}
        changeEmail={(data) => setEmail(data)}
        changePassword={(data) => setPassword(data)}
        handleLogin={handleLogin}
      />
    );
  } else if (!isLoggedIn && !isUser) {
    loginSignup = (
      <Signup
        user={user}
        changeEmail={(data) => setEmail(data)}
        changePassword={(data) => setPassword(data)}
        handleSignup={handleSignup}
      />
    );
  } else if (isLoggedIn) {
    loginSignup = (
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
      {loginSignup}
      {display}
      <button onClick={handleUserClick}>Toggle</button>
      <About />
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default LoginControl;
