import React from "react";
import { FaDatabase } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoMdAnalytics } from "react-icons/io";
import { MdDataset } from "react-icons/md";

const ServicesData = [
  {
    name: "Web Development",
    description: "Lorem ipsum dolor sit amet.",
    icon: <HiMiniComputerDesktop className="text-4xl " />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Data Science",
    description: "Lorem ipsum dolor sit amet.",
    icon: <MdDataset className="text-4xl " />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Data Analyst",
    description: "Lorem ipsum dolor sit amet.",
    icon: <IoMdAnalytics className="text-4xl " />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Database Management",
    description: "Lorem ipsum dolor sit amet.",
    icon: <FaDatabase className="text-4xl " />,
    bgColor: "bg-orange-500/70",
  },
];

const ServicesBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }) => (
          <div
            className={`p-3 ${bgColor} min-h-[180px] rounded-xl hover:border-black/50 hover:border-2 hover:cursor-pointer transition-all duration-200`}
          >
            <div className="p-3 space-y-3">
              {icon}
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;
