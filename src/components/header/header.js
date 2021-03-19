import React from "react";
import "./header.css";

export default function header() {
  return (
    <div className="header-wrapper">
      <div className="flex-items">About</div>
      <div className="flex-items">Blogs</div>
      <div className="flex-items">Contact Me</div>
      <div className="flex-items">Projects</div>
      <div className="flex-items">Skills</div>
      <div className="flex-items">Download File</div>
    </div>
  );
}
