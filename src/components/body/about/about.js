import React from "react";
import "./about.css";

export default function about() {
  return (
    <div className="about-container">
      <div className="about-text">
        <p>Short intro about someone intro about someone</p>
      </div>
      <div className="about-image">
        Person Image
        <img src="./logo512.png" alt="person profile" />
      </div>
    </div>
  );
}
