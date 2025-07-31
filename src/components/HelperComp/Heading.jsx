import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-sharp">
        <h1 className="inline-block pb-1 mb-3 text-2xl font-bold text-center border-b-2 md:text-3xl border-primary text-sharp">
          {title}
        </h1>
        <p className="md:text-sm text-slate-500 text-center md:w-[80%] mx-auto text-sharp text-xs">
          {subtitle}
        </p>
      </div>
  );
};

export default Heading;
