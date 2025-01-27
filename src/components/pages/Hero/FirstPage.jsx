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
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello!</p>
              <p className="text-4xl font-bold md:text-6xl text-black/80">
                I'm Syed F Yusuf
              </p>
              <p className="text-2xl text-left text-black/75">
                Frontend Developer
              </p>
              <p className="text-black/75">
                Seeking an entry-level Frontend Developer position to leverage
                expertise in HTML, CSS, JavaScript, ReactJS, TailwindCSS, and
                modern web technologies, while contributing to innovative
                projects and growing in a dynamic, collaborative environment.
              </p>
              <a
                className="inline-block  primary-btn"
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
