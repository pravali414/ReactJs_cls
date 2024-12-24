import { useState } from "react";

const Controller = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value); // Update the state with the input value
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value); // Update the state with the input value
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", userName);
    console.log("Password:", password);

    if (!userName || !password) {
      alert("Please fill out all fields.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={userName}
            onChange={userNameHandler} // Update state on input change
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            value={password}
            onChange={passwordHandler} // Update state on input change
          />
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

export default Controller;
