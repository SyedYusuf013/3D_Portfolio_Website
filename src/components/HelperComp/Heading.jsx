import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="inline-block pb-1 mb-3 text-3xl font-bold text-center border-b-2 border-primary">
          {title}
        </h1>
        <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
          {subtitle}
        </p>
      </div>
  );
};

export default Heading;
