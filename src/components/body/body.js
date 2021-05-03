import React from "react";
import About from "./about/about";
import Blogs from "./blogs/blogs";
import Projects from "./projects/projects";
import ContactMe from "./contactme/contactMe";

export function Body() {
  return (
    <div>
      <About />
      <Blogs />
      <Projects />
      <ContactMe />
    </div>
  );
}
