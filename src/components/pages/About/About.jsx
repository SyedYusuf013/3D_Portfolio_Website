import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full p-10 bg-white page-shadow">
      {/* Heading */}
      <Heading
        title="About"
        subtitle="Lorem ipsum dolor sit amet cousto nulla suscipit quos cumque sunt accusamus blanditiis ipsam eum."
      />

      {/* Details */}
      <div className="mt-10 text-slate-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          similique. Ducimus aliquam, accusamus porro velit recusandae rem
          eligendi repellat molestiae corporis nostrum fuga voluptates ipsum.
        </p>{" "}
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          debitis quidem voluptates, ipsum animi in!
        </p>
        {/* Social Links */}
        <div className="flex mt-10 space-x-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            aria-label="Facebook"
          >
            <MdFacebook className="transition-all duration-500 social-btn hover:scale-105" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="Instagram"
          >
            <AiFillInstagram className="transition-all duration-500 social-btn hover:scale-105" />
          </a>
          <a
            href="https://github.com/SyedYusuf013"
            target="_blank"
            aria-label="Github"
          >
            <AiFillGithub className="transition-all duration-500 social-btn hover:scale-105" />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-yusuf-859a82220/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin className="transition-all duration-500 social-btn hover:scale-105" />
          </a>
        </div>
        {/* Button links */}
        <div className="flex mt-4 space-x-4">
          <a
            href="file:///C:/Users/syedf/Downloads/Admin/Syed_Resume%20(1).pdf"
            target="_blank"
            className="transition-all duration-500 primary-btn hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="tel:+971 8448266069"
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
