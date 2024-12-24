
import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Email:", username);
    console.log("Password:", password);

    if (password.length < 3) {
      alert("Please enter more than 3 characters in the password.");
    } else {
      hitServer(username, password);
    }
  };

  const hitServer = (username, password) => {
    fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys", // Dynamic username
        password: "emilyspass", // Dynamic password
        expiresInMins: 30, // Optional, defaults to 60
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid credentials");
        }
        return res.json();
      })
      .then((data) => console.log("Response:", data))
      .catch((err) => console.error("Error:", err.message));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="text" className="form-control" id="email" ref={emailRef} />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" ref={passwordRef} />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </>
  );
};

export default Uncontrolled;
