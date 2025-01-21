import React from "react";
import ServicesBox from "./ServicesBox";
import Heading from "../../HelperComp/Heading";

const Services = () => {
  return (
    <div className="h-full p-10 bg-white page-shadow">
      {/* Heading */}
      <Heading
        title="Technology"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, inventore hic eveniet illum magnam a iusto nulla suscipit quos cumque sunt accusamus blanditiis ipsam eum."
      />
      {/* Services Card */}
      <div>
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;
