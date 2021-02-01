import React, { useState } from "react";
import List from "./List";
import "./styles/input.css";

const Input = ({ isLoggedIn, user }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const reset = () => {
    setTitle("");
    setContent("");
  };

  const submitData = () => {
    const journalData = {
      title,
      content,
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

  let feedback =
    !title || !content
      ? "Please complete your entry before hitting submit."
      : "Your entry looks good. Hit submit when you're ready!";

  return (
    <>
      <div id="input" className="input-container">
        <h2>Hello, {user.email}!</h2>
        <h4>Make an Entry for {today.toLocaleDateString("en-US", options)}</h4>
        <p>{feedback}</p>
        <form>
          <input
            type="text"
            name="title"
            placeholder="What sort of lesson or challenge are you writing about?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            name="content"
            placeholder="What do you want to record about that lesson learned or challenge encountered today?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="input-btn-container">
            <button id="submit-btn" className="form-btn" onClick={handleSubmit}>
              Submit
            </button>
            <button id="cancel-btn" className="form-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
         
        </form>
      </div>
      <List isLoggedIn={isLoggedIn} user={user} title={title} />
    </>
  );
};

export default Input;
