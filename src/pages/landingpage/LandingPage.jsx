import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";

export default function LandingPage() {
  return (
    <div className="landingpage">
      <div className="bannar-msg">
        <h1 className="bannar">App Tracker</h1>
        <p className="caption">Track all of you apps in one place</p>
        <div className="btn-div">
          <Link to="/register">
            <button className="land-btn">Register</button>
          </Link>
          <Link to="/login">
            <button className="land-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
