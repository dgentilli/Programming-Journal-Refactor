import React from "react";

const ToggleButton = ({ isUser, toggleButton }) => {
  let buttonText;
  isUser ? (buttonText = "Go To Signup") : (buttonText = "Go To Login");
  return (
    <>
      <button onClick={toggleButton}>{buttonText}</button>
    </>
  );
};

export default ToggleButton;
