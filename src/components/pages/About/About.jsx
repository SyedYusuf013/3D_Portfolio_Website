import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full p-6 bg-white md:p-10 page-shadow">
      {/* Heading */}
      <Heading
        title="About"
        subtitle="I'm a dedicated web developer with expertise in building responsive, scalable, and user-centric applications using modern JavaScript frameworks. I enjoy solving complex problems and continuously evolving in this fast-paced tech landscape."
      />

      {/* Details */}
      <div className="mt-6 mb-6 text-sm md:text-base md:mt-10 text-slate-500 text-sharp">
        <li>
          I'm a passionate web developer focused on building responsive and
          scalable applications using modern JavaScript frameworks.
        </li>{" "}
        <br />
        <li>
          With a solid understanding of both frontend and backend technologies,
          I take pride in creating solutions that are clean, functional, and
          user-centric.
        </li>{" "}
        <br /> 
        <li>
          I thrive on solving complex problems and constantly expanding my
          skills to stay ahead in this fast-paced industry.
        </li>
        {/* Social Links */}
        <div className="flex mt-3 space-x-4 md:mt-10">
          <a
            href="https://www.facebook.com/syed.yusuf511/"
            target="_blank"
            aria-label="Facebook"
          >
            <MdFacebook className="text-3xl duration-500 transtion-all md:social-btn hover:scale-105" />
          </a>
          <a
            href="https://www.instagram.com/syedfyusuf09/"
            target="_blank"
            aria-label="Instagram"
          >
            <AiFillInstagram className="text-3xl transition-all duration-500 md:social-btn hover:scale-105" />
          </a>
          <a
            href="https://github.com/SyedYusuf013"
            target="_blank"
            aria-label="Github"
          >
            <AiFillGithub className="text-3xl transition-all duration-500 md:social-btn hover:scale-105" />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-yusuf-859a82220/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin className="text-3xl transition-all duration-500 md:social-btn hover:scale-105" />
          </a>
        </div>
        {/* Button links */}
        <div className="flex space-x-4 md:mt-4">
          <a
            href="https://drive.google.com/file/d/1cIdBs61BCpSqZ4K_qPP4XZII7tj8xxN8/view?usp=drive_link"
            target="_blank"
            className="transition-all duration-500 primary-btn hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="tel:+91 8448266069"
            className="transition-all duration-500 outline-btn hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
