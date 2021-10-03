import React, { useState } from "react";
import axios from "axios";
import LogHeader from "../../compnents/logheader/LogHeader";
import "./signup.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");

  function sendInfo() {
    if (pass === conPass && pass) {
      axios
        .post("http://localhost:8000/signup", {
          username: user,
          password: pass,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  }
  function changeHandlePass(userInput) {
    setPass(userInput);
  }
  function changeHandleConPass(userInput) {
    setConPass(userInput);
  }
  function changeHandleUser(userInput) {
    setUser(userInput);
  }
  return (
    <div>
      <LogHeader />
      <div className="form-container">
        <h1 className="log-bannar">Sign Up</h1>
        <form
          className="log-form"
          onSubmit={() => {
            sendInfo();
          }}
        >
          <input
            className="form-input text"
            type="input"
            placeholder="Username"
            onChange={(e) => {
              changeHandleUser(e.target.value);
            }}
          ></input>
          <input
            className="form-input text"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              changeHandlePass(e.target.value);
            }}
          ></input>
          <input
            className="form-input text"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              changeHandleConPass(e.target.value);
            }}
          ></input>
          <input className="form-input form-btn" type="submit"></input>
        </form>
      </div>
    </div>
  );
}
