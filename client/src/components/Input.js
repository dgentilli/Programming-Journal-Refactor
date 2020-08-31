import React, { useState } from "react";
import List from "./List";
import { useChangeHandler } from "../hooks/useChangeHandler";

const Input = ({ isLoggedIn, user }) => {
  const { values, handleChange, reset } = useChangeHandler({
    title: "",
    content: "",
  });

  const submitData = () => {
    const journalData = {
      title: values.title,
      content: values.content,
      author: user.id,
    };
    fetch("/api/journal/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(journalData),
    }).then((res) => res.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitData();
    reset();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    reset();
  };

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  return (
    <>
      <div id="input" className="input-container">
        <h2>Hello, {user.email} !</h2>
        <h4>Make an Entry for {today.toLocaleDateString("en-US", options)}</h4>
        <form>
          <input
            type="text"
            name="title"
            placeholder="What sort of lesson or challenge are you writing about?"
            value={values.title}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="content"
            placeholder="What do you want to record about that lesson learned or challenge encountered today?"
            value={values.content}
            onChange={handleChange}
          />
          <button id="submit-btn" className="form-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button id="cancel-btn" className="form-btn" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
      <List isLoggedIn={isLoggedIn} user={user} title={values.title} />
    </>
  );
};

export default Input;
