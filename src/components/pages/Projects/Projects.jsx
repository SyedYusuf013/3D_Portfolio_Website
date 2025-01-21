import React from "react";
import ProjectBox from "./ProjectBox";
import Heading from "../../HelperComp/Heading";

const Projects = ({ ProjectData }) => {
  return (
    <div className="h-full p-10 bg-white page-shadow">
      {/* Heading */}
      <Heading
        title="Projects"
        subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          dolor doloremque corrupti veritatis, a maxime soluta exercitationem
          minima autem asperiores praesentium cumque laudantium qui perferendis?"
      />

      {/* Projects Section */}
      <div>
        <ProjectBox ProjectData={ProjectData} />
      </div>
    </div>
  );
};

export default Projects;
