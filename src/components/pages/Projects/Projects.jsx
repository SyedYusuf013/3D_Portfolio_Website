import React from "react";
import ProjectBox from "./ProjectBox";
import Heading from "../../HelperComp/Heading";

const Projects = ({ ProjectData }) => {
  return (
    <div className="h-full p-10 bg-white page-shadow">
      {/* Heading */}
      <Heading
        title="Projects"
        subtitle="Dive into a selection of full-stack web applications built using the MERN stack (MongoDB, Express.js, React, Node.js). These projects highlight my ability to create responsive frontends, build RESTful APIs, and manage backend logic — delivering complete, real-world solutions with clean UI and robust functionality."
      />

      {/* Projects Section */}
      <div>
        <ProjectBox ProjectData={ProjectData} />
      </div>
    </div>
  );
};

export default Projects;
