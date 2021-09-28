import React from "react";
import LogHeader from "../../compnents/logheader/LogHeader";
import "./signup.css";
export default function Login() {
  return (
    <div>
      <LogHeader />
      <div className="form-container">
        <h1 className="log-bannar">Sign Up</h1>
        <form className="log-form">
          <input
            className="form-input text"
            type="input"
            placeholder="Username"
          ></input>
          <input
            className="form-input text"
            type="password"
            placeholder="Password"
          ></input>
          <input
            className="form-input text"
            type="password"
            placeholder="Confirm Password"
          ></input>
          <input className="form-input form-btn" type="submit"></input>
        </form>
      </div>
    </div>
  );
}
