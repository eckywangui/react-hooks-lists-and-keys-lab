import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {<a href="#home" key="home-link">Home </a>}
    {<a href="#about" key="about-link">about</a>}
    {<a href="#projects" key="projects-link">projects</a>}
  </nav>;
}

export default NavBar;
