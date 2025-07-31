import React from "react";

const SkillsLevel = ({ skillName, percentage }) => {
  return (
    <div className="space-y-1 ">
      <div className="flex items-end justify-between">
        <p className="text-base font-bold md:text-xl">{skillName}</p>
        <p className="text-sm md:font-bold">{percentage}</p>
      </div>
      <div className="w-full h-1 rounded-full md:h-2 bg-slate-200">
        <div
          style={{ width: `${percentage}` }}
          className="h-1 rounded-full md:h-2 bg-primary"
        ></div>
      </div>
    </div>
  );
};

export default SkillsLevel;
