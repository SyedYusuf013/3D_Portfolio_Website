import React from "react";
import Heading from "../../HelperComp/Heading";
import { FaCalendarDays } from "react-icons/fa6";

const Work = () => {
  return (
    <div className="h-full p-10 bg-white page-shadow">
      {/* Heading */}
      <Heading
        title="Work Experience"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      {/* Details */}
      {/* book-page page right */}
      <div className="absolute right-0">
        {/* page-front */}
        <div className="relative top-0 left-0 w-full h-full px-10 my-4 mt-10">
          {/* workeduc-box */}
          <div className="border-l-2 border-primary">
            {/* workeduc-content */}
            <div className="relative pl-6 mb-5 before:content-[''] before:absolute before:top-0 before:left-[-0.65rem] before:w-5 before:h-5 before:bg-primary before:rounded-full">
              <div className="flex items-center justify-between">
                <h1 className="font-bold">React Developer</h1>
                <div className="flex items-center text-black/50">
                  <FaCalendarDays className="mr-2" />
                  <span>November-Present </span>
                </div>
              </div>
              <h3 className="font-semibold text-black/80">
                Nextzen Software Solution Pvt. Ltd.{" "}
              </h3>
              <p className="text-slate-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente voluptatibus eveniet soluta officia quis blanditiis
                deleniti commodi rerum vel illo.
              </p>
            </div>
            <div className="relative pl-6 mb-5 before:content-[''] before:absolute before:top-0 before:left-[-0.65rem] before:w-5 before:h-5 before:bg-primary before:rounded-full">
              <div className="flex items-center justify-between">
                <h1 className="font-bold">Freelancer</h1>
                <div className="flex items-center text-black/50">
                  <FaCalendarDays className="mr-2" />
                  <span>August-October 2024</span>
                </div>
              </div>
              <h3 className="font-semibold text-black/80">
                Frontend Developer{" "}
              </h3>
              <p className="text-slate-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente voluptatibus eveniet soluta officia quis blanditiis
                deleniti commodi rerum vel illo.
              </p>
            </div>
            <div className="relative pl-6 mb-5 before:content-[''] before:absolute before:top-0 before:left-[-0.65rem] before:w-5 before:h-5 before:bg-primary before:rounded-full">
              <div className="flex items-center justify-between">
                <h1 className="font-bold">Internship</h1>
                <div className="flex items-center text-black/50">
                  <FaCalendarDays className="mr-2" />
                  <span>July-August 2023</span>
                </div>
              </div>
              <h3 className="font-semibold text-black/80">
                Web Developer - Bharat Intern
              </h3>
              <p className="text-slate-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente voluptatibus eveniet soluta officia quis blanditiis
                deleniti commodi rerum vel illo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
