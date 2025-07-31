import React, { useState } from "react";
import { FaDatabase } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoMdAnalytics } from "react-icons/io";
import { MdDataset } from "react-icons/md";

const ServicesData = [
  {
    name: "Front-End Developer",
    description:
      "Skilled in HTML, CSS, JavaScript, React.js, and Tailwind CSS. I create responsive, user-friendly interfaces with strong focus on performance and accessibility.",
    icon: <HiMiniComputerDesktop className="text-xl md:text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Back-End Developer",
    description:
      "Experience with Node.js, Express.js, and RESTful APIs. I build secure and scalable server-side logic and handle authentication, routing, and data flow.",
    icon: <MdDataset className="text-xl md:text-4xl " />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "MERN Stack Developer",
    description:
      "Proficient in MongoDB, Express.js, React.js, and Node.js. I develop full-stack web applications with seamless integration between frontend and backend.",
    icon: <IoMdAnalytics className="text-xl md:text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Database Management",
    description:
      "Knowledge of MongoDB and MySQL. I design and manage databases, ensuring data integrity, efficient queries, and scalability.",
    icon: <FaDatabase className="text-xl md:text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];

const ServicesBox = () => {
  const [expanded, setExpanded] = useState(
    Array(ServicesData.length).fill(false)
  );

  const toggleDescription = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className="grid grid-cols-2 gap-5 mt-5 text-white md:grid-cols-2 text-sharp">
      {ServicesData.map(({ name, description, icon, bgColor }, index) => (
        <div
          key={index}
          className={`p-4 ${bgColor} rounded-xl hover:border-black/50 hover:border-2 transition-all duration-200 text-sharp`}
        >
          <div className="space-y-2 md:space-y-3">
            {icon}
            <h1 className="text-base font-semibold md:text-xl text-sharp">
              {name}
            </h1>

            {/* Mobile View: See more/less logic */}
            <p className="text-sm text-sharp md:hidden">
              {expanded[index] ? description : `${description.slice(0, 5)}...`}
              <button
                className="ml-2 text-xs underline hover:text-black"
                onClick={() => toggleDescription(index)}
              >
                {expanded[index] ? "See less" : "See more"}
              </button>
            </p>

            {/* Desktop View: Always show full description */}
            <p className="hidden text-sm md:block text-sharp">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesBox;
