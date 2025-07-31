import React from "react";
import Heading from "../../HelperComp/Heading";
import { FaCalendarDays } from "react-icons/fa6";

const Academics = () => {
  return (
    <div className="h-full px-4 py-10 bg-white md:px-10 page-shadow text-sharp">
      {/* Heading */}
      <Heading
        title="Academics"
        subtitle="B.Tech graduate with a strong foundation in core science and mathematics from CBSE."
      />
      {/* Details */}
      <div className="relative max-w-screen-md mx-auto mt-2 md:mt-6">
        {/* Graduation */}
        <div className="border-l-2 border-primary">
          <div className="relative pl-4 mb-2 md:pl-6 md:mb-5 before:content-[''] before:absolute before:top-0 md:before:left-[-0.65rem] before:left-[-0.45rem] before:w-3 md:before:w-5 before:h-3 md:before:h-5 before:bg-primary before:rounded-full">
            <div className="flex items-center justify-between text-sharp">
              <h1 className="text-xs font-semibold md:font-bold md:text-base">
                Graduation
              </h1>
              <div className="flex items-center text-xs text-black/50 md:text-base">
                <FaCalendarDays className="mr-2 text-xs md:text-base" />
                <span>Jun'20 - Jun'24</span>
              </div>
            </div>
            <h3 className="text-xs font-semibold text-black/80 md:text-base">
              B.Tech in Electronics and Communication Engineering <br />
              Dr. A.P.J Abdul Kalam Technical University (AKTU) - Lucknow
            </h3>
            <p className="text-xs text-slate-800 md:text-base">
              Completed a four-year undergraduate program with a focus on
              electronics, communication systems, and embedded programming.
              Gained strong technical skills in C/C++, python, and digital
              systems alongside exposure to project development and minor
              research work.
            </p>
          </div>

          {/* High Schooling */}
          <div className="relative pl-4 mb-2 md:pl-6 md:mb-5 before:content-[''] before:absolute before:top-0 md:before:left-[-0.65rem] before:left-[-0.45rem] before:w-3 md:before:w-5 before:h-3 md:before:h-5 before:bg-primary before:rounded-full">
            <div className="flex items-center justify-between text-sharp">
              <h1 className="text-xs font-semibold md:font-bold md:text-base">
                High Schooling
              </h1>
              <div className="flex items-center text-xs text-black/50 md:text-base">
                <FaCalendarDays className="mr-2 text-xs md:text-base" />
                <span>May'17 - May'19</span>
              </div>
            </div>
            <h3 className="text-xs font-semibold text-black/80 md:text-base">
              12th - PCM <br />
              <div className="flex flex-row justify-between">
                <h3>St. Dominic Savio's High School</h3>
                <h3>CBSE Board - Patna</h3>
              </div>
            </h3>
            <p className="text-xs text-slate-800 md:text-base">
              Studied Physics, Chemistry, and Mathematics with Computer Science
              as an additional subject. Developed strong problem-solving and
              analytical thinking through academics and practice with mock tests
              and olympiads.
            </p>
          </div>

          {/* Schooling */}
          <div className="relative pl-4 mb-2 md:pl-6 md:mb-5 before:content-[''] before:absolute before:top-0 md:before:left-[-0.65rem] before:left-[-0.45rem] before:w-3 md:before:w-5 before:h-3 md:before:h-5 before:bg-primary before:rounded-full">
            <div className="flex items-center justify-between text-sharp">
              <h1 className="text-xs font-semibold md:font-bold md:text-base">
                Schooling
              </h1>
              <div className="flex items-center text-xs text-black/50 md:text-base">
                <FaCalendarDays className="mr-2 text-xs md:text-base" />
                <span>Apr'15 - Apr'17</span>
              </div>
            </div>
            <h3 className="text-xs font-semibold text-black/80 md:text-base">
              10th - Science <br />
              <div className="flex flex-row justify-between">
                <h3>Mother's International Academy</h3>
                <h3>CBSE Board - Patna</h3>
              </div>
            </h3>
            <p className="text-xs text-slate-800 md:text-base">
              Completed secondary education with a science focus. Built a strong
              foundation in Mathematics, General Science, and English.
              Participated in co-curricular activities including science
              exhibitions and quizzes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
