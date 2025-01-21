import React from "react";

const ProjectBox = ({ ProjectData }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        {ProjectData.map((project, index) => {
          return (
            <div key={index} className="h-[160px]">
              <img
                src={project.image}
                alt=""
                className="object-cover w-full h-full transition-all duration-500 rounded-xl hover:scale-105 border-[2px] border-primary"
              />
              {/* Details Section */}
              <div className="pt-3">
                <h1 className="text-2xl font-semibold">{project.name}</h1>
                <p className="text-gray-500 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    className="mt-3 transition-all duration-500 primary-btn hover:scale-105"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/SyedYusuf013"
                    target="_blank"
                    className="mt-3 transition-all duration-500 outline-btn hover:scale-105"
                  >
                    Src Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectBox;
