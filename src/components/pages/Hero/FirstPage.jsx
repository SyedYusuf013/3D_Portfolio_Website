import React from "react";
import personImg from "../../../assets/person2.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="w-full h-full bg-secondary page-shadow">
        <div className="flex flex-col items-center px-5 py-3 md:space-y-4 md:p-10 md:items-center">
          {/* image-container */}
          <div>
            <img
              src={personImg}
              alt="Profile pic"
              className="md:w-[300px] mx-auto w-[200px] md:mx-0 md:h-[300px] h-[190px]"
            />
          </div>
          {/* text-container */}
          <div className=" text-sharp">
            <div className="space-y-1 md:space-y-3 text-sharp">
              <p className="text-sm uppercase md:text-base">Hello!</p>
              <p className="text-3xl font-bold md:text-6xl text-black/80">
                I'm Syed F Yusuf
              </p>
              <p className="text-xl md:text-2xl text-black/75">
                MERN Stack Developer
              </p>
              <p className="text-sm text-black/75 md:text-base text-sharp">
                Self-driven and detail-oriented Full Stack Developer with around
                1 year of experience launching and leading a web development
                startup. Skilled in React.js, Node.js, MongoDB, and REST APIs,
                with hands-on experience in building responsive, user-focused
                applications from scratch. I’m excited to use both my technical
                skills and the experience I gained.
              </p>
              <a
                className="inline-block translate-x-64 md:translate-x-0 primary-btn"
                href="mailto:syedfayequeuddinyusuf@gmail.com"
              >
                {" "}
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
