import React from "react";
import ServicesBox from "./ServicesBox";
import Heading from "../../HelperComp/Heading";

const Services = () => {
  return (
    <div className="h-full p-6 bg-white md:p-10 page-shadow">
      {/* Heading */}
      <Heading 
        title="Technology"
        subtitle="I have hands-on experience across multiple areas of web development, from crafting responsive user interfaces to building robust server-side logic and managing scalable databases. I specialize in the MERN stack and love turning ideas into full-fledged applications."
      />
      {/* Services Card */}
      <div>
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;
