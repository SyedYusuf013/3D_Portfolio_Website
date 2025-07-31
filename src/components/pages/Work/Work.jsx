import React from "react";
import Heading from "../../HelperComp/Heading";
import { FaCalendarDays } from "react-icons/fa6";

const Work = () => {
  return (
    <div className="h-full px-4 py-10 bg-white md:px-10 page-shadow text-sharp">
      {/* Heading */}
      <div className="-mt-6 md:mt-0">
        <Heading
          title="Work Experience"
          subtitle="MERN Stack Developer & Co-Founder at Nextzen Software Solution; also completed a Web Development internship at Bharat Intern during college."
        />
      </div>
      {/* Details */}
      {/* book-page page right */}
      <div
        className="relative max-w-screen-md mx-auto mt-2 md:mt-6"
        // className="absolute right-0"
      >
        {/* page-front */}
        <div
          className="w-full h-full md:my-4"
          // className="relative top-0 left-0 w-full h-full px-10 my-4 mt-6"
        >
          {/* workeduc-box */}
          <div className="border-l-2 border-primary">
            {/* workeduc-content */}
            <div className="relative pl-4 mb-2 md:pl-6 md:mb-5 before:content-[''] before:absolute before:top-0 md:before:left-[-0.65rem] md:before:w-5 md:before:h-5 before:left-[-0.45rem] before:w-3 before:h-3 before:bg-primary before:rounded-full">
              <div
                className="flex items-center justify-between text-sharp"
                // className="flex items-center justify-between"
              >
                <h1 className="text-xs font-semibold md:font-bold md:text-base text-sharp">
                  Co-Founder & MERN Stack{" "}
                  <span className="hidden md:inline">Developer</span>
                </h1>
                <div className="flex items-center mt-0 text-xs md:mt-1 text-black/50 md:text-base">
                  <FaCalendarDays className="mr-2 text-xs md:text-base text-sharp" />
                  <span>Aug'24 - Jul'25 </span>
                </div>
              </div>
              <h3 className="text-xs font-semibold md:mt-1 text-black/80 md:text-base text-sharp">
                Nextzen Software Solution{" "}
              </h3>

              <div className="space-y-2 text-xs md:leading-relaxed md:space-y-3 text-slate-800 md:text-base text-sharp">
                <p>
                  At Nextzen Software Solution (
                  <a
                    href="https://www.nextzensoftware.com"
                    className="text-blue-600 underline"
                    target="_blank"
                  >
                    www.nextzensoftware.com
                  </a>
                  ), I serve as the Co-Founder and MERN Stack Developer. I have
                  built dynamic and responsive web applications for clients and
                  internal projects.
                </p>
                <ul className="ml-4 list-disc list-inside text-sharp">
                  <li>
                    <strong>Baitaltahzeeb</strong>: A custom-built client
                    website for a cleaning and building maintenance
                    organization, (
                    <a
                      href="https://www.baitaltahzeeb.com"
                      className="text-blue-600 underline"
                      target="_blank"
                    >
                      www.baitaltahzeeb.com
                    </a>
                    ).
                  </li>
                </ul>
                <p>
                  My role included client communication, system architecture
                  design, and full-stack development using React, Node.js,
                  Express, MongoDB, Tailwind CSS, and JWT-based authentication.
                </p>
              </div>
            </div>
            <div className="relative pl-4 mb-2 md:pl-6 md:mb-5 before:content-[''] before:absolute before:top-1 md:before:left-[-0.65rem] md:before:w-5 md:before:h-5 before:left-[-0.45rem] before:w-3 before:h-3 before:bg-primary before:rounded-full">
              <div className="flex items-center justify-between text-sharp">
                <h1 className="text-xs font-semibold md:font-bold md:text-base text-sharp">
                  Internship
                </h1>
                <div className="flex items-center text-xs text-black/50 md:text-base text-sharp">
                  <FaCalendarDays className="mr-2 text-xs md:text-base text-sharp" />
                  <span>Jul'23 - Aug'23</span>
                </div>
              </div>
              <h3 className="text-xs font-semibold text-black/80 md:text-base text-sharp">
                Web Developer - Bharat Intern
              </h3>

              <div className="hidden text-xs md:mb-3 md:space-y-2 md:leading-relaxed text-slate-800 md:text-base md:inline">
                <p>
                  During my 3rd year of college in 2023, I completed a one-month
                  internship with Bharat Intern as a Web Developer.
                </p>
                <p>
                  I worked on tasks that enhanced my HTML, CSS, and JavaScript
                  skills and implemented mini projects such as static websites
                  and responsive layouts.
                </p>
                <p>
                  This internship gave me initial exposure to real-world web
                  development and reinforced my foundation in frontend
                  development.
                </p>
              </div>

              <div className="inline mb-3 text-xs md:space-y-2 md:leading-relaxed text-slate-800 md:text-base md:hidden">
                <ul className="list-disc list-inside text-sharp">
                  <li>
                    During my 3rd year of college in 2023, I completed a
                    one-month internship with Bharat Intern as a Web Developer.
                  </li>
                  <li>
                    I worked on tasks that enhanced my HTML, CSS, and JavaScript
                    skills and implemented mini projects such as static websites
                    and responsive layouts.
                  </li>
                  <li>
                    This internship gave me initial exposure to real-world web
                    development and reinforced my foundation in frontend
                    development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
