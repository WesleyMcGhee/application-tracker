import React from "react";
import LogHeader from "../../compnents/logheader/LogHeader";
import { Link } from "react-router-dom";
import "./landingpage.css";

export default function LandingPage() {
  return (
    <div className="landingpage">
      <LogHeader />
      <h1 className="bannar">
        Job <br /> Tracker
      </h1>

      <div className="display-container">
        <div className="display applied">
          <div className="table-name red">
            <h2>Applied</h2>
          </div>
          <div className="card">
            <h3 className="employer">Walmart</h3>
            <p className="job-title">Front-End Engineer</p>
            <p className="location">Alanta, GA</p>
          </div>
          <div className="card">
            <h3 className="employer">Twitch</h3>
            <p className="job-title">Back-End Engineer</p>
            <p className="location">Remote</p>
          </div>
        </div>
        <div className="display interview">
          <div className="table-name blue">
            <h2>Interview</h2>
          </div>
          <div className="card">
            <h3 className="employer">Uber</h3>
            <p className="job-title">Full-Stack Developer</p>
            <p className="location">Austin, TX</p>
          </div>
          <div className="card">
            <h3 className="employer">Apple</h3>
            <p className="job-title">Systems Engineer</p>
            <p className="location">Austin, TX</p>
          </div>
          <div className="card">
            <h3 className="employer">IBM</h3>
            <p className="job-title">Back-End Engineer</p>
            <p className="location">Rochester, MN</p>
          </div>
        </div>
        <div className="display offer">
          <div className="table-name green">
            <h2>Offer</h2>
          </div>
          <div className="card">
            <h3 className="employer">Microsoft</h3>
            <p className="job-title">Sr. Software Engineer</p>
            <p className="location">Seattle, WA</p>
          </div>
        </div>
      </div>

      <h1 className="slogan-header">
        Making Job
        <br />
        Searching Easier
      </h1>
      <p className="slogan-text">
        Job Tracker sole priority is to make the job hunt easier, that's why
        we'll keep it simple, and listen to you for updates, and features.
      </p>
      <div className="btn-link-cont">
        <div className="sign-btn-container">
          <Link to="/register">
            <button className="sign-btn">Sign-Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
