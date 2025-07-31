import React, { useState } from "react";

const ProjectBox = ({ ProjectData }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 mt-6 md:mt-10">
        {ProjectData.map((project, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index} className="h-auto">
              <img
                src={project.image}
                alt="project-img"
                className="object-cover w-full md:h-[200px] h-[100px] transition-all duration-500 rounded-xl hover:scale-105 border-[2px] border-primary"
              />
              {/* Details Section */}
              <div className="pt-2 md:pt-3">
                <h1 className="text-xl font-semibold md:text-2xl">
                  {project.name}
                </h1>
                <p
                  className={`text-sm text-gray-500 md:text-base ${
                    isExpanded ? "" : "line-clamp-2"
                  }`}
                >
                  {project.description}
                </p>

                {/* See more / See less */}
                <button
                  onClick={() => toggleDescription(index)}
                  className="mt-1 text-xs underline text-primary md:text-sm"
                >
                  {isExpanded ? "See less" : "See more"}
                </button>

                {/* Links */}
                <div className="flex mt-1 space-x-3 md:mt-3 md:space-x-4">
                  <a
                    href={project.previewLink}
                    target="_blank"
                    className="text-sm duration-500 md:text-base tranition-all primary-btn hover:scale-105"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/SyedYusuf013"
                    target="_blank"
                    className="text-sm transition-all duration-500 outline-btn hover:scale-105 md:text-base"
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
