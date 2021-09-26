import React from "react";
import { Link } from "react-router-dom";
import "./logheader.css";

export default function LogHeader() {
  return (
    <header>
      <Link to="/" className="logo">
        <h1>Tracker</h1>
      </Link>
      <div class="nav-container">
        <ul className="nav-list">
          <Link to="/login" className="list-link">
            <li className="nav-item">Login</li>
          </Link>
          <Link to="/signup" className="list-link">
            <li className="nav-item">Register</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
