import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projects.map((X) => (
          <ProjectItem
            key={X.id}
            name={X.name}
            about={X.about}
            technologies={X.technologies}
          />
        ))}
      </div>
      
    </div>
  );
}

export default ProjectList;
