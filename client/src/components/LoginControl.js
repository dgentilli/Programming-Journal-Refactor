import React, { useState } from "react";
import Input from "./Input";
import Footer from "./Footer";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";

const LoginControl = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [isUser, setIsUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (route) => {
    //console.log("handleSUbmit route", route);
    const userData = JSON.stringify({
      email: email,
      password: password,
    });
    //console.log("handleSubmit, userData", userData);
    fetch(`/api/author/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
    }).then((res) => {
      const resBody = res.json();
      Promise.resolve(resBody).then((userObject) => {
        if (!userObject.success) {
          setUser(userObject);
        } else {
          setUser(userObject);
          if (route === "signup") {
            setIsUser(true);
            setEmail("");
            setPassword("");
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

  let loginSignup;
  if (!isLoggedIn && isUser) {
    loginSignup = (
      <Login
        isUser={isUser}
        user={user}
        changeEmail={(data) => setEmail(data)}
        changePassword={(data) => setPassword(data)}
        handleLogin={handleLogin}
        toggleButton={handleUserClick}
      />
    );
  } else if (!isLoggedIn && !isUser) {
    loginSignup = (
      <Signup
        isUser={isUser}
        user={user}
        changeEmail={(data) => setEmail(data)}
        changePassword={(data) => setPassword(data)}
        handleSignup={handleSignup}
        toggleButton={handleUserClick}
      />
    );
  } else if (isLoggedIn) {
    loginSignup = <Logout handleLogout={logoutClick} />;
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
      <About />
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default LoginControl;
