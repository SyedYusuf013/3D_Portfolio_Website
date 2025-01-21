import React from "react";
import SkillsLevel from "./SkillsLevel";

const Skills = () => {
  return (
    <div className="h-full px-10 bg-white page-shadow">
      <div>
        {/* heading */}
        <div>
          <div className="relative">
            <div className="text-6xl font-bold text-center xl:text-8xl text-black/5">
              SKILLS
            </div>
            <h1 className="absolute text-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-4xl">
              Skills
            </h1>
          </div>
        </div>

        {/* skills section */}
        <div className="space-y-7">
          <SkillsLevel skillName="Python" percentage={"80%"} />
          <SkillsLevel skillName="HTML" percentage={"90%"} />
          <SkillsLevel skillName="CSS" percentage={"85%"} />
          <SkillsLevel skillName="TailwindCSS" percentage={"80%"} />
          <SkillsLevel skillName="JavaScript" percentage={"75%"} />
          <SkillsLevel skillName="ReactJS" percentage={"70%"} />
          <SkillsLevel skillName="MySQL" percentage={"90%"} />
          <SkillsLevel skillName="MongoDB" percentage={"80%"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
