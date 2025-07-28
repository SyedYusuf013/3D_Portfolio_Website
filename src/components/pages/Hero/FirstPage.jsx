import React from "react";
import personImg from "../../../assets/person2.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="w-full h-full bg-secondary page-shadow">
        <div className="p-10 space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[300px] mx-auto" />
          </div>
          {/* text-container */}
          <div className="text-sharp">
            <div className="space-y-3">
              <p className="uppercase">Hello!</p>
              <p className="text-4xl font-bold md:text-6xl text-black/80">
                I'm Syed F Yusuf
              </p>
              <p className="text-2xl text-left text-black/75">
                MERN Stack Developer
              </p>
              <p className="text-black/75">
                Self-driven and detail-oriented Full Stack Developer with around
                1 year of experience launching and leading a web development
                startup. Skilled in React.js, Node.js, MongoDB, and REST APIs,
                with hands-on experience in building responsive, user-focused
                applications from scratch. I’m excited to use both my technical
                skills and the experience I gained.
              </p>
              <a
                className="inline-block primary-btn"
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
